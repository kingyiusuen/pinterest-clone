const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersRouter = require('express').Router()
const passport = require('passport')
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

usersRouter.post('/signup', async (request, response) => {
  const body = request.body

  const user = await User.findOne({ username: body.username })
  if (user) {
    return response.status(400).json({error: 'Username already exists'})
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const newUser = new User({
    username: body.username,
    name: body.name,
    passwordHash: passwordHash,
  })

  const savedUser = await newUser.save()
  response.json(savedUser)  
})

usersRouter.post('/login', async (request, response) => {
  const body = request.body

  const user = await User.findOne({ username: body.username })
  const isPasswordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!user || !isPasswordCorrect) {
    return response.status(401).json({error: 'Invalid username or password'})
  }

  const payload = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(
    payload,
    process.env.SECRET,
    { expiresIn: 3600 }
  )

  response
    .status(200)
    .send({ token: `BEARER ${token}`, username: user.username, name: user.name })
})

usersRouter.get(
  '/:username',
  passport.authenticate('jwt', { session: false }),
  async (request, response) => {
    const user = await User.findOne(request.params.username)
    if (user) {
      response.json(user.toJSON())
    } else {
      response.status(404).end()
    }
  }
)

usersRouter.delete('/:id', async (request, response) => {
  await User.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = usersRouter
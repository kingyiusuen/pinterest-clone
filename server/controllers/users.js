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
    return response.status(400).json({error: 'The username has already been taken'})
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
    id: user._id,
    username: user.username,
    name: user.name,
  }

  const token = jwt.sign(
    payload,
    process.env.SECRET,
    { expiresIn: 3600 }
  )

  response
    .status(200)
    .send({ token: `Bearer ${token}` })
})

usersRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  async (request, response) => {
    const user = await User.findById(request.params.id)
    if (user) {
      response.json(user)
    } else {
      response.status(404).end()
    }
  }
)

usersRouter.put(
  '/:id/save-pin',
  passport.authenticate('jwt', { session: false }),
  async (request, response) => {
    const user = await User.findByIdAndUpdate(
      request.params.id,
      { $addToSet: { savedPins: request.body.photoUrl } },
      { new: true }
    )
    response.json(user)
  }
)

usersRouter.put(
  '/:id/delete-pin',
  passport.authenticate('jwt', { session: false }),
  async (request, response) => {
    const user = await User.findByIdAndUpdate(
      request.params.id,
      { $pull: { savedPins: request.body.photoUrl } },
      { new: true }
    )
    response.json(user)
  }
)


module.exports = usersRouter
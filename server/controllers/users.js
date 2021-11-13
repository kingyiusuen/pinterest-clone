const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usersRouter = require("express").Router();
const passport = require("passport");
const User = require("../models/user");

usersRouter.post("/signup", async (request, response) => {
  const body = request.body;

  let user;
  try {
    user = await User.findOne({ username: body.username });
  } catch (exception) {
    return response
      .status(500)
      .json({ error: "A database error has occurred" });
  }
  if (user) {
    return response
      .status(400)
      .json({ error: "The username has already been taken" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const newUser = new User({
    username: body.username,
    name: body.name,
    passwordHash: passwordHash,
  });

  try {
    const savedUser = await newUser.save();
    return response.json(savedUser);
  } catch (exception) {
    return response
      .status(500)
      .json({ error: "A database error has occurred" });
  }
});

usersRouter.post("/login", async (request, response) => {
  const body = request.body;

  let user;
  try {
    user = await User.findOne({ username: body.username });
  } catch (exception) {
    return response
      .status(500)
      .json({ error: "A database error has occurred" });
  }

  const isPasswordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!user || !isPasswordCorrect) {
    return response.status(401).json({ error: "Invalid username or password" });
  }

  const payload = {
    id: user._id,
    username: user.username,
    name: user.name,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

  return response.status(200).send({ token: `Bearer ${token}` });
});

usersRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    try {
      const user = await User.findById(request.params.id);
      return response.json(user);
    } catch (exception) {
      return response
        .status(500)
        .json({ error: "A database error has occurred" });
    }
  }
);

usersRouter.put(
  "/:id/save-pin",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    try {
      const user = await User.findByIdAndUpdate(
        request.params.id,
        { $addToSet: { savedPins: request.body.photoUrl } },
        { new: true }
      );
      return response.json(user);
    } catch (exception) {
      return response
        .status(500)
        .json({ error: "A database error has occurred" });
    }
  }
);

usersRouter.put(
  "/:id/delete-pin",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    try {
      const user = await User.findByIdAndUpdate(
        request.params.id,
        { $pull: { savedPins: request.body.photoUrl } },
        { new: true }
      );
      return response.json(user);
    } catch (exception) {
      return response
        .status(500)
        .json({ error: "A database error has occurred" });
    }
  }
);

module.exports = usersRouter;

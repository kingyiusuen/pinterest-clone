const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/user");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        const user = await User.findOne({ username: jwtPayload.username });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false, { error: "This user does not exist" });
        }
      } catch (exception) {
        console.log(exception);
      }
    })
  );
};

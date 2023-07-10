const passport = require("passport");
const config = require("../config/config");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const { userModel } = require("../models/user_model");

passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientId,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callBackUrl,
      passReqtoCallback: true,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // check if user exist with the profile id
        const userExist = await userModel.findOne({
          email: profile.email,
        });

        // store user in database if user does not exist
        if (!userExist) {
          await userModel.create({
            email: profile.email,
            displayName: profile.displayName,
            last_login: Date.now(),
            token: accessToken,
            googleId: profile.id,
            profile_name: profile.displayName,
          });
        } else if (userExist && !userExist.facebookId) {
          await userModel.updateOne({
            last_login: Date.now(),
            token: accessToken,
            googleId: profile.id,
          });
        }
        return cb(null, profile);
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebook.clientId,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callBackUrl,
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // check if user exist with the profile id
        const userExist = await userModel.findOne({
          email: profile.emails[0].value,
        });
        // store user in database if user does not exist
        if (!userExist) {
          await userModel.create({
            displayName: profile.displayName,
            last_login: Date.now(),
            email: profile.emails[0].value,
            token: accessToken,
            facebookId: profile.id,
            profile_name: profile.displayName,
          });
        } else if (userExist && !userExist.facebookId) {
          await userModel.updateOne({
            last_login: Date.now(),
            token: accessToken,
            facebookId: profile.id,
          });
        }

        return cb(null, profile);
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.twitter.consumerKey,
      consumerSecret: config.twitter.consumerSecret,
      callbackURL: config.twitter.callBackUrl,
      includeEmail: true,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // check if user exist with the profile id
        const userExist = await userModel.findOne({
          email: profile.emails[0].value,
        });

        // store user in database if user does not exist
        if (!userExist) {
          await userModel.create({
            displayName: profile.displayName,
            last_login: Date.now(),
            token: accessToken,
            twitterId: profile.id,
            profile_name: profile.displayName,
            email: profile.emails[0].value,
          });
        } else if (userExist && !userExist.twitterId) {
          await userModel.updateOne({
            last_login: Date.now(),
            token: accessToken,
            twitterId: profile.id,
          });
        }
        return cb(null, profile);
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
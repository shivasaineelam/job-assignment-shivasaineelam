import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user";
import bcrypt from "bcrypt";

passport.use(new LocalStrategy(
  async (username: string, password: string, done: Function) => {
    try {
      const user = await User.findOne({ username });
      
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));


passport.serializeUser((user: any, done: Function) => {
  done(null, user.id); 
});

passport.deserializeUser(async (id: string, done: Function) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

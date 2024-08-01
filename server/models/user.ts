// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from "bcrypt";

interface IUser extends Document {
  username: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});
UserSchema.pre("save", async function (next) {
    const person = this;
    if (!person.isModified("password")) next();
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(person.password, salt);
      person.password = hashedpassword;
      next();
    } catch (error) {
      next();
    }
  });
  UserSchema.methods.checkpassword = async function (givenpassword:string) {
    try {
      const ismatch = await bcrypt.compare(givenpassword, this.password);
      return ismatch;
    } catch (error) {
      return error;
    }
  };
  
const User = mongoose.model<IUser>('User', UserSchema);
export default User;

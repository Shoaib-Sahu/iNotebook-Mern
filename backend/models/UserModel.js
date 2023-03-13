import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password "],
        minLength: [6, "Password should have atleast 6 characters"]
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// Generating Hash Password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    };
    this.password = await bcrypt.hash(this.password, 10);
});

const UserModel = mongoose.model('User', userSchema);
export default UserModel
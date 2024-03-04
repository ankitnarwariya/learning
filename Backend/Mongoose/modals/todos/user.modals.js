import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowarcase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowarcase: true
        },
        password: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

export const User = mongoose.model('User', userSchema)
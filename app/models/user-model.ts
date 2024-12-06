import mongoose from "mongoose";

// user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true
})

// exports
export default mongoose.models.Users || mongoose.model("Users", userSchema)
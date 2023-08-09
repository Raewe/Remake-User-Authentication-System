import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        role: Number,
    },
    { collection: "admin" }
);

const adminUsers = mongoose.model("admin", postSchema);
export default adminUsers;

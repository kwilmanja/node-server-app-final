import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: String,
        lastName: String,
        dob: Date,
        email: String,
        createdAt: { type: Date, default: Date.now },
        isAdmin: { type: Boolean, default: false },

        role: {
            type: String,
            default: "user",
            enum: ["admin", "user"],
        },

        level: {
            type: String,
            default: "Beginner",
            enum: ["Beginner", "Moderate", "Advanced", "Expert"],
        },

        friends: [{
            type: String
        }]

    },
    { collection: "users" }
);
export default usersSchema;
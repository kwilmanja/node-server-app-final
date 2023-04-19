import mongoose from "mongoose";
const friendsSchema = new mongoose.Schema(
    {
        userID: String,
        trailID: String,
        content: String,
        public: Boolean,
        published: { type: Date, default: Date.now },
    },
    { collection: "reviews" }
);
export default friendsSchema;
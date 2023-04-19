import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        userID: String,
        trailID: String,
        content: String,
        public: Boolean,
        published: { type: Date, default: Date.now },
    },
    { collection: "reviews" }
);
export default reviewsSchema;
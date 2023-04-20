import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        username: String,
        trailID: String,
        trailName: String,
        content: String,
        public: { type: Boolean, default: true},
        published: { type: Date, default: Date.now },
    },
    { collection: "reviews" }
);
export default reviewsSchema;
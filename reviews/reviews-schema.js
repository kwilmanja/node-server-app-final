import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        username: String,
        trailID: String,
        trailName: String,
        content: String,
        published: { type: Date, default: Date.now },
        public: { type: Boolean, default: true},
    },
    { collection: "reviews" }
);
export default reviewsSchema;
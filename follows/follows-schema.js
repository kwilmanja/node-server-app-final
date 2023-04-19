import mongoose from "mongoose";

const followsSchema = new mongoose.Schema({
      followed: String,
      follower: String
}, {collection: 'follows'});

export default followsSchema;
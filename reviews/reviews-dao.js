import reviewsModel from "./reviews-model.js";


export const createReview = (review) =>
    reviewsModel.create(review);

export const findReview = (rid) =>
    reviewsModel.findById(rid);

export const updateReview = (review) =>
    reviewsModel.findByIdAndUpdate(review._id, review);

export const deleteReview = (rid) =>
    reviewsModel.findByIdAndDelete(rid);

export const findReviewsFromUsername = (username) =>
    reviewsModel.find({ username: username });

export const findReviewsFromTrailID = (trailID) =>
    reviewsModel.find({ trailID: trailID });

export const findAllReviews = () => reviewsModel.find();

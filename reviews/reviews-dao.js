import reviewsModel from "./reviews-model.js";

export const findAllReviews = () => reviewsModel.find();

// export const findUserById = (uid) => usersModel.findById(uid);
//
// export const findReviewsByUserID = (username) =>
//     reviewsModel.findOne({ username });

export const createReview = (review) => reviewsModel.create(review);

export const updateReview = (rid, review) =>
    reviewsModel.updateOne({ _id: rid }, review);

export const deleteReview = (rid) => reviewsModel.deleteOne({ _id: rid });
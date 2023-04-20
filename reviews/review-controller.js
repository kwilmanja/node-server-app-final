import * as dao from "./reviews-dao.js";


const ReviewController = (app) => {

    const createReview = async (req, res) => {
        const newReview = await dao.createReview(req.body);
        res.json(newReview);
    };

    const findReview = async (req, res) => {
        const reviews = await dao.findReview(req.params.id);
        res.json(reviews);
    };

    const updateReview = async (req, res) => {
        const review = req.body;
        const status = await dao.updateReview(review);
        res.send(status);
    };

    const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.id);
        res.send(status);
    };

    const findReviewsFromTrailID = async (req, res) => {
        const review = await dao.findReviewsFromTrailID(req.params.trailID);
        res.json(review);
    };

    const findReviewsFromUsername = async (req, res) => {
        const review = await dao.findReviewsFromUsername(req.params.username);
        res.json(review);
    };

    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };


    app.post("/api/reviews/create", createReview);
    app.post("/api/reviews/:id", findReview);
    app.put("/api/reviews/update", updateReview);
    app.delete("/api/reviews/:id", deleteReview);
    app.post("/api/reviews/trail/:trailID", findReviewsFromTrailID);
    app.post("/api/reviews/user/:username", findReviewsFromUsername);
    app.get("/api/reviews/all", findAllReviews);





};
export default ReviewController;
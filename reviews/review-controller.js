import * as dao from "./reviews-dao.js";


const ReviewController = (app) => {

    const create = async (req, res) => {
        const newReview = await dao.createReview(req.body);
        res.json(newReview);
    };

    const update = async (req, res) => {
        const review = req.body;
        const status = await dao.updateReview(req.params.id, review);
        res.send(status);
    };


    app.post("/api/reviews/create", create);
    app.put("/api/reviews/:id", update);


    // app.get("/api/users", findAllUsers);
    // app.get("/api/users/username/:username", findUserByUsername);


};
export default ReviewController;
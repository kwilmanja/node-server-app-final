import express from 'express';
import cors from 'cors';
import session from "express-session";
import mongoose from "mongoose";
import UserController from "./users/user-controller.js";
import ReviewController from "./reviews/review-controller.js";
import FollowsController from "./follows/follows-controller.js";


mongoose.connect('mongodb://127.0.0.1:27017/final');

const app = express();

app.use(
    session({secret: "any string", resave: false, saveUninitialized: true,
            cookie: {secure: false}}));
app.use(
    cors({credentials: true, origin: "http://localhost:3000",}));
app.use(express.json());

UserController(app);
ReviewController(app);
FollowsController(app);


app.listen(4000);
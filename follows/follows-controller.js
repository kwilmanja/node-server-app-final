import * as followsDao from "./follows-dao.js";
import {findFromFollowCharacteristics} from "./follows-dao.js";

const FollowsController = (app) => {

    const followUser = async (req, res) => {
        const follow = {};
        const currentUser = req.session['currentUser'];
        follow.follower = currentUser._id;
        follow.followed = req.params.userID;
        await followsDao.followUser(follow);
    }

    const unfollowUser = async (req, res) => {
        const follow = {};
        const currentUser = req.session['currentUser'];
        follow.follower = currentUser._id;
        follow.followed = req.params.userID;
        await followsDao.unfollowUser(follow);
    }

    //Find followers of given user ID
    const findFollowerFromID = async (req, res) => {
        console.log("hello world");
        const follow = {};
        follow.followed = req.params.userID;
        const result = await followsDao.findFromFollowCharacteristics(follow);
        res.json(result);
    }

    //Find who the user ID is following
    const findFollowedFromID = async (req, res) => {
        console.log("hello world");
        const follow = {};
        follow.follower = req.params.userID;
        const result = await followsDao.findFromFollowCharacteristics(follow);



        res.json(result);
    }

    app.post('/api/follows/:userID', followUser)
    app.delete('/api/follows/:userID', unfollowUser)

    app.post('/api/follows/follower/:userID', findFollowerFromID)
    app.post('/api/follows/followed/:userID', findFollowedFromID)




}

export default FollowsController;
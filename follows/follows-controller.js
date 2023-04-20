import * as followsDao from "./follows-dao.js";
import {findFromFollowCharacteristics} from "./follows-dao.js";

const FollowsController = (app) => {

    const followUser = async (req, res) => {
        const follow = {};
        const currentUser = req.session['currentUser'];
        follow.follower = currentUser.username;
        follow.followed = req.params.username;
        await followsDao.followUser(follow);
    }

    const unfollowUser = async (req, res) => {
        const follow = {};
        const currentUser = req.session['currentUser'];
        follow.follower = currentUser.username;
        follow.followed = req.params.username;
        await followsDao.unfollowUser(follow);
    }

    //Find followers of given username
    const findFollowerFromUsername = async (req, res) => {
        const follow = {};
        follow.followed = req.params.username;
        const result = await followsDao.findFromFollowCharacteristics(follow);
        res.json(result);
    }

    //Find who the username is following
    const findFollowedFromUsername = async (req, res) => {
        const follow = {};
        follow.follower = req.params.username;
        const result = await followsDao.findFromFollowCharacteristics(follow);
        res.json(result);
    }

    const findFollow = async (req, res) => {

    }

    app.post('/api/follows/:username', followUser)
    app.delete('/api/follows/:username', unfollowUser)

    app.post('/api/follows/follower/:username', findFollowerFromUsername)
    app.post('/api/follows/followed/:username', findFollowedFromUsername)
    app.post('/api/follows/follow', findFollow)




}

export default FollowsController;
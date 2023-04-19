import followsModel from "./follows-model.js";

export const followUser = async (follow) => {
    await followsModel.create(follow);
}

export const unfollowUser = async (follow) => {
    await followsModel.deleteMany(follow);
}

export const findFromFollowCharacteristics = (follow) => {
    return followsModel.find(follow);
}



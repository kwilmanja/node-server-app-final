import * as usersDao from "./users-dao.js";
import * as dao from "./users-dao.js";


const UserController = (app) => {
    const register = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao
            .findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao
            .createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao
            .findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };


    const updateUser = async (req, res) => {
        const user = req.body;
        // const index = users.findIndex((user) => user.id === req.params.id);
        // users[index] = user;
        const status = await dao.updateUser(req.params.id, user);
        res.send(status);
    };

    const findProfileByUsername = async (req, res) => {
        const user = await dao.findUserByUsername(req.params.username);
        res.json(user);
    };


    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    app.post("/api/users/register", register);
    app.post("/api/users/profile", profile);

    app.get("/api/users/profile/:username", findProfileByUsername);

    app.put("/api/users/:id", updateUser);



    // app.get("/api/users", findAllUsers);
    // app.get("/api/users/username/:username", findUserByUsername);


};
export default UserController;
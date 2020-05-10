const userService = require('../services/userService');
const orderService = require('../services/orderService');
const USER_URL = '/api/user';
function addUserRoutes(app) {
  // Users REST API:

  // // LIST
  app.get(USER_URL, (req, res) => {
    userService.query().then((users) => res.json(users));
  });

  // SINGLE - GET Full details including boards
  app.get(`${USER_URL}/:userId`, (req, res) => {
    const userId = req.params.userId;
    Promise.all([
      userService.getUserById({ userId }),
      orderService.query({ userId }),
    ]).then(([user, orders]) => {
      res.json({ user, orders });
    });
  });

  // DELETE
  app.delete(`${USER_URL}/:userId`, (req, res) => {
    const userId = req.params.userId;
    userService
      .removeUser(userId)
      .then(() => res.end(`The User ${userId} Was Deleted `));
  });

  // UPDATE
  app.put(`${USER_URL}/:userId`, (req, res) => {
    const user = req.body;
    user.firstName[0].toUpperCase();
    user.lastName[0].toUpperCase();
    userService.updateUser(user).then((user) => res.json(user));
  });

  // Check login
  app.put(`/api/login`, (req, res) => {
    const userCredentials = req.body;
    userService
      .checkLogin({ userCredentials })
      .then((user) => {
        req.session.user = user;
        res.json(user);
      })
      .catch(res.catch);
  });

  // CREATE
  app.post(`/api/signup`, (req, res) => {
    const newUser = req.body;
    newUser.firstName[0].toUpperCase();
    newUser.lastName[0].toUpperCase();
    userService.addUser(newUser).then((user) => res.json(user));
  });
}

module.exports = addUserRoutes;

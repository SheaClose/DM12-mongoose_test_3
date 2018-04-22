const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  removeUser
} = require("./controllers/User/UserCtrl");

function routes(app) {
  app.post("/api/users", addUser);
  app.get("/api/users", getUsers);
  app.get("/api/users/:id", getUser);
  app.put("/api/users/:id", updateUser);
  app.delete("/api/users/:id", removeUser);
}

module.exports = routes;

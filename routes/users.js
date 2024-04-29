const Controller = require("../controllers/users");
const { authenticationAdmin } = require("../middlewares/authentication");
const router = require("express").Router();

router
  .post("/login", Controller.login)
  .post("/register", Controller.register)
  .get("/users", Controller.getUsers)
  .use(authenticationAdmin)
  .post("/admin-register", Controller.adminRegister)
  .delete("/users/:id", Controller.deleteUser);

module.exports = router;

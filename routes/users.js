const Controller = require("../controllers/users");
const { authenticationAdmin } = require("../middlewares/authentication");
const router = require("express").Router();

router
  .get("/", Controller.getUsers)
  .post("/login", Controller.login)
  .post("/register", Controller.register)
  .use(authenticationAdmin)
  .post("/admin-register", Controller.adminRegister)
  .delete("/:id", Controller.deleteUser);

module.exports = router;

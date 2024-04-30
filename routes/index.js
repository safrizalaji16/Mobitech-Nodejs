const router = require("express").Router();
const userRouter = require("./users");
const brandRouter = require("./brands");
const productRouter = require("./products");
const { authentication } = require("../middlewares/authentication");

router
  .use("/users", userRouter)
  .use("/brands", authentication, brandRouter)
  .use("/products", authentication, productRouter);

module.exports = router;

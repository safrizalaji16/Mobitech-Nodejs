const router = require("express").Router();
const userRouter = require("./users");
const brandRouter = require("./brands");
const productRouter = require("./products");
const { authentication } = require("../middlewares/authentication");

router
  .use("/users", userRouter)
  .use(authentication)
  .use("/brands", brandRouter)
  .use("/products", productRouter);

module.exports = router;

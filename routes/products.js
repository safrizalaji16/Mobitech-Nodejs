const Controller = require("../controllers/products");
const { authenticationAdmin } = require("../middlewares/authentication");
const router = require("express").Router();

router
  .get("/", Controller.getProducts)
  .post("/", authenticationAdmin, Controller.postProduct)
  .get("/:id", Controller.getDetailProduct)
  .use(authenticationAdmin)
  .put("/:id", Controller.updateProduct)
  .delete("/:id", Controller.deleteProduct);

module.exports = router;

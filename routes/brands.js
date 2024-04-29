const Controller = require("../controllers/brands");
const { authenticationAdmin } = require("../middlewares/authentication");
const router = require("express").Router();

router
  .get("/", Controller.getBrands)
  .post("/", authenticationAdmin, Controller.postBrand)
  .get("/:id", Controller.getDetailBrand)
  .use(authenticationAdmin)
  .put("/:id", Controller.updateBrand)
  .delete("/:id", Controller.deleteBrand);

module.exports = router;

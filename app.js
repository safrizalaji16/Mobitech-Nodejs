if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUI = require("swagger-ui-express");
const port = process.env.PORT || 3000;
const swaggerDocs = require("./routes/swagger")(port);
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

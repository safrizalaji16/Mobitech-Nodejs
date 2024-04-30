if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const swaggerUI = require("swagger-ui-express");

const swaggerDocs = require("./swagger/swagger")(port);
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (swagger-ui files)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Routes
app.use(router);

// Error handler middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

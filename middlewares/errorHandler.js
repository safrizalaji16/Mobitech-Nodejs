module.exports = function errorHandler(err, req, res, next) {
  console.log(err);
  let status = 500;
  let msg = "Internal Server Error";

  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      status = 400;
      msg = err.errors.map((el) => el.message)[0];
      break;

    case "JsonWebTokenError":
    case "Unauthorized":
      status = 401;
      msg = "Please Login First";
      break;

    case "Forbidden":
      status = 403;
      msg = "Don't have permission";
      break;

    case "Error email or password":
      status = 401;
      msg = "Error invalid email or password";
      break;

    case "Product Not Found":
      status = 404;
      msg = "Product Not Found";
      break;

    case "Brand Not Found":
      status = 404;
      msg = "Brand Not Found";
      break;
  }

  res.status(status).json({ msg });
};

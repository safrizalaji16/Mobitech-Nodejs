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

    case "Food Not Found":
      status = 404;
      msg = "Food Not Found";
      break;

    case "Carts Is Required":
      status = 400;
      msg = "Carts Is Required";
      break;

    case "Stock Not Enough":
      status = 400;
      msg = "Stock Not Enough";
      break;
  }

  res.status(status).json({ msg });
};

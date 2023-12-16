async function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "JsonWebTokenError":
    case "User Not Found":
      res.status(401).json({ message: "Unauthentification" });
      break;

    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors.map((err) => err.message) });
      break;

    case "Email and Password cannot empty":
    case "Email or Password wrong":
      res.status(400).json({ message: err.name });
      break;

    default:
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = errorHandler;

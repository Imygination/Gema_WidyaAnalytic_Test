async function errorHandler(err, req, res, next) {
  switch (error.name) {
    case "JsonWebTokenError":
    case "User Not Found":
      res.status(401).json({ message: "Unauthentification" });
      break;
  }
}

module.exports = errorHandler;

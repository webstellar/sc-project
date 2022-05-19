const ErrorHandler = require("../utils/errorHandler");

//internal server error is 500
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  //Error message to display in Dev
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(err);

    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  //Error message to display in Prod
  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };

    // Wrong Mongoose Object ID Error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Validation Error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    error.message = err.message;
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

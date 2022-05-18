//Error Handler Class (always begin with Caps like comp)
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); //call parent class constructor Error
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

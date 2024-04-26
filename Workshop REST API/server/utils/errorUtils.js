const errorResponse = (res, statusCode, message) => res.status(statusCode).send(message);


module.exports = {errorResponse};
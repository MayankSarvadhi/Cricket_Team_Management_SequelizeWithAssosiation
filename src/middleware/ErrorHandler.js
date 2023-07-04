
module.exports = function customError(err, req, res, next) {
    let sCode = err.statusCode || 500
    let message = err.message || "Internal ServerError"

    return res.status(sCode).json({ success: false, statusCode: sCode, message });

};
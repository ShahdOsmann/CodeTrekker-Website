const verify_token = (req, res, next) => {
    const authorHeader = req.headers['Authorization'] || req.headers['authorization'];
    const token = authorHeader.split(' ')[1];
    next();
}
module.exports = { verify_token };
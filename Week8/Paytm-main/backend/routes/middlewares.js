const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }
   console.log(JWT_SECRET);
    const token = authHeader.split(' ')[1];
    console.log(token);
    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        console.log(decoded);
        req.userId = decoded.userId;

        console.log(req.userId);

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = authMiddleware;
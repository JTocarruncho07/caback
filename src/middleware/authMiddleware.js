const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1]; 
    jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.usuairo = decoded.usuario;
            next();
        }
    )
};
module.exports = authMiddleware;

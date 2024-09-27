const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send("A token is required for authentication");

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send("Invalid Token");
        req.user = decoded;
        next();
    });
};

const verifyAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next(); // Proceed to the next function
    } else {
        return res.status(403).json({ message: "Access denied: Admins only" });
    }
};

module.exports = {verifyToken, verifyAdmin};
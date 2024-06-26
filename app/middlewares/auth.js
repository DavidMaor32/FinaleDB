const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(process.env.DEBUGGING) 
        return next();
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('Access Denied');
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;

        const newToken = jwt.sign({ id: verified.id }, process.env.TOKEN_SECRET, {
            expiresIn: '15m'
        });
        res.set('Authorization', newToken);

        next();
    } catch (err) {
        console.log(err);
        res.status(400).send('Invalid Token');
    }
}
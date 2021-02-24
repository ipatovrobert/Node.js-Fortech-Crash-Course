const jwt = require('jsonwebtoken');

exports.protected = (req, res, next) => {
    
    if(req.headers.authorization) {
        const token = jwt.verify(req.headers.authorization, 'mysecretpassword');
        req.user = token.id;
    } else {
        return res.status(403).json({
            msg: 'Unauthorized'
        });
    }

    //VERY IMPORTANT !!!!!!
    next();
    //VERY IMPORTANT !!!!!!
}

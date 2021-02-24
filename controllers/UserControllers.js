const UserModel = require('../models/UserModel');

//@@ Route  /api/v1/user
//@@ REQUEST     POST
//@@ DESC   Create an account
exports.postUsers = async (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !password) {
        return res.status(403).json({
            success: false,
            msg: 'Please provide username and password'
        })
    }
    try {
        const User = await UserModel.create({username, password, email});

        const token = User.signJwt();

        return res.status(200).json({
            success: true,
            token
        })
    } catch (error) {
        if(error.code === 11000) {
            return res.status(403).json({
                success: false,
                msg: 'Account already exists'
            })
        }

        return res.status(500).json({
            success: false,
            msg: 'Something else went wrong'
        })
    }

};

//@@ Route  /api/v1/user
//@@ REQUEST     POST
//@@ DESC   Create an account

exports.signIn = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        const User = await UserModel.findOne({ email });
        if(!User) {
            return res.status(403).json({
                success: false,
                msg: 'Invalid credentials'
            })
        }
        const isMatching = await User.comparePass(password);
        const token = User.signJwt();

        if(isMatching) {
            return res.status(200).json({
                success: true,
                data: User,
                token
            })
        }
        if(!isMatching) {
            return res.status(403).json({
                success: false,
                msg: 'Invalid credentials'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: error
        })
    }
}
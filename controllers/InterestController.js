const Interest = require('../models/InterstModel');

exports.createInterest = async (req, res, next) => {
    const { interest } = req.body;

    try {
        const newInterest = await Interest.create({ interest, user: req.user });

        return res.status(200).json({
            success: true,
            interest: newInterest
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: 'Something wrong happened!'
        })
    }
}

exports.getInterests = async (req, res, next) => {
    try {
        const newInterest = await Interest.find({ user: req.user });

        return res.status(200).json({
            success: true,
            interest: newInterest
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: 'Something wrong happened!'
        })
    }
}
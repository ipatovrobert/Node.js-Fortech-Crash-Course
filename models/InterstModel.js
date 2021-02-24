const mongoose = require('mongoose');

const InterestSchema = new mongoose.Schema({
    interest: {
        type: String,
        minLength: 2
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
})

module.exports = mongoose.model('Interest', InterestSchema);
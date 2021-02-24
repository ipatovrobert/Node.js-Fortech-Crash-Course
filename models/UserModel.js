const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minLength: [5, 'Username must be atleast 5 chars length'],
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minLength: [10, 'Email must be atleast 10 chars length'],
    },
    password: {
        type: String,
        minLength: [6, 'Password must be atleast 6 chars length'],
        required: true,
    }
});

UserSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10);
    return this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.signJwt = function () {
    const token = jwt.sign({
        id: this._id
    }, 'mysecretpassword', {
        expiresIn: '30d'
    });
    return token;
}

UserSchema.methods.comparePass = async function (password){
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('UserModel', UserSchema);
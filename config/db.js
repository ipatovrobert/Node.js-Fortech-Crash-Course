const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('dbURI', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });

    console.log('Successfully connected to MongoDB'.cyan.bold);
}

module.exports = connectDB;

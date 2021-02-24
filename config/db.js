const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://admin:admin123@cluster0.evsfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });

    console.log('Successfully connected to MongoDB'.cyan.bold);
}

module.exports = connectDB;

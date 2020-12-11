const mongoose = require('mongoose');

const URI = "mongodb+srv://talhahassan:talhahassan@cluster0.1hpm8.mongodb.net/shirts?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;
const mongoose = require('mongoose');

const URI = "mongodb://talhahassan:talhahassan@cluster0-shard-00-00.bbwhb.mongodb.net:27017,cluster0-shard-00-01.bbwhb.mongodb.net:27017,cluster0-shard-00-02.bbwhb.mongodb.net:27017/shirts?ssl=true&replicaSet=atlas-11f2ie-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;
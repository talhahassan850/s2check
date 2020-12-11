const mongoose = require('mongoose');
//s2check

const URI = "mongodb://talhahassan:talhahassan@cluster0-shard-00-00.xnt6v.mongodb.net:27017,cluster0-shard-00-01.xnt6v.mongodb.net:27017,cluster0-shard-00-02.xnt6v.mongodb.net:27017/shirts?ssl=true&replicaSet=atlas-avy2gc-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected..');
}

module.exports = connectDB;
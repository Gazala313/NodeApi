const mongoose = require('mongoose');

uri= "mongodb+srv://heena1993gazala:123%40Gazala@gazalaapi.mkkumop.mongodb.net/GazalaApi?retryWrites=true&w=majority";

const connectDB = () => {
    // console.log("connectDB");
    return mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          
    });
};

module.exports = connectDB;
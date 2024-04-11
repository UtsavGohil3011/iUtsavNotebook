const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017' 

const connectMongo = () => {
    mongoose.connect(mongoURL)
    .then(()=>{console.log('Successfully');})
    .catch((err)=>{console.log(err);})
}

module.exports = connectMongo
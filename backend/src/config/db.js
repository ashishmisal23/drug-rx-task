const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful')
})

connection.on('error', () => {
    console.log('Mongo DB Connection Failed')
})

module.exports = mongoose;
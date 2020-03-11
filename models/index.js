var mongoose = require('mongoose');
mongoose.set('debug', true);


let database_string = ''
if (process.env.NODE_ENV === 'production') {
    database_string = process.env.MONGODB_URI
    console.log(database_string)
} else {
    database_string = 'mongodb://127.0.0.1:27017/munenori_test'
    console.log(database_string)
}

const db = mongoose.connect(database_string, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.Promise = Promise;

module.exports = db;
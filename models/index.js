var mongoose = require('mongoose');
mongoose.set('debug', true);

const database_string = 'mongodb+srv://dbUser:futtbucker@cluster0-uthwo.mongodb.net/test?retryWrites=true&w=majority'

const db = mongoose.connect(database_string, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.Promise = Promise;

module.exports = db;
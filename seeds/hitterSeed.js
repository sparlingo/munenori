mongoose = require('mongoose');
const fs = require('mz/fs');
const csv = require('fast-csv');
const streamToIterator = require('stream-to-iterator') 

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

//const mongoUri = process.env.NODE_ENV === 'development' ? 'mongodb://localhost:27017/munenori' : 'mongodb+srv://tester:futtbucker@cluster0-ggfo2.azure.mongodb.net/test?retryWrites=true&w=majority'
mongoUri = 'mongodb://127.0.0.1:27017/munenori_test'

const Hitter = require('../models/Hitter');

const log = data => console.log(JSON.stringify(data, undefined, 2));

(async function() {

  try {
    const conn = await mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});
    await Promise.all(Object.entries(conn.models).map(([k,m]) => m.remove()));

    let headers = Object.keys(Hitter.schema.paths)
      .filter(k => ['_id','__v'].indexOf(k) === -1);

    console.log(headers);
    let stream = fs.createReadStream('../data/Batting.csv')
      .pipe(csv.parse({ headers }))

    const iterator = await streamToIterator(stream).init();

    let buffer = [],
      counter = 0;

    for (let docPromise of iterator) {
      let doc = await docPromise;
      buffer.push(doc);
      counter++;
    }

    if (counter > 10000) {
      await Hitter.insertMany(buffer);
      buffer = [];
      counter = 0;
    }

    if (counter > 0) {
      await Hitter.insertMany(buffer);
      buffer = [];
      counter = 0;
    }

  } catch(e) {
    console.error(e)
  } finally {
    process.exit()
  }
})()
 
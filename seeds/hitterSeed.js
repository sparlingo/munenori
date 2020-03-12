mongoose = require('mongoose');
const fs = require('mz/fs');
const csv = require('fast-csv');

const Hitter = require('../models/Hitter');

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const mongoUri = process.env.MONGODB_URI
// mongoUri = 'mongodb://127.0.0.1:27017/munenori_test'

const log = data => console.log(JSON.stringify(data, undefined, 2));

(async function() {

  try {
    const conn = await mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});
    await Promise.all(Object.entries(conn.models).map(([k,m]) => m.deleteMany()));

    let headers = Object.keys(Hitter.schema.paths)
      .filter(k => ['_id','__v'].indexOf(k) === -1);

    console.log(headers);
    
    await new Promise((resolve,reject) => {

      let buffer = [],
        counter = 0;

      let stream = fs.createReadStream('../data/Batting.csv')
        .pipe(csv.parse({ headers }))
        .on("error", reject)
        .on("data", async doc => {
          stream.pause();
          buffer.push(doc);
          counter++;
          log(doc);
          try {
            if ( counter > 10000 ) {
              await Hitter.insertMany(buffer);
              buffer = [];
              counter = 0;
            }
          } catch(e) {
            stream.destroy(e);
          }
          stream.resume();
        })
        .on("end", async () => {
          try {
            if ( counter > 0 ) {
              await Hitter.insertMany(buffer);
              buffer = [];
              counter = 0;
              resolve();
            }
          } catch(e) {
            stream.destroy(e);
          }
        });

    });

  } catch(e) {
    console.error(e)
  } finally {
    process.exit()
  }
})()
 
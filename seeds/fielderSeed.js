mongoose = require('mongoose');
const fs = require('mz/fs');
const csv = require('fast-csv');

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const Fielder = require('../models/Fielder');

const log = data => console.log(JSON.stringify(data, undefined, 2));

(async function() {

  try {
    const conn = await mongoose.connect('mongodb+srv://tester:futtbucker@cluster0-ggfo2.azure.mongodb.net/test?retryWrites=true&w=majority', 
        {useNewUrlParser: true, useUnifiedTopology: true}
    );

    await Promise.all(Object.entries(conn.models).map(([k,m]) => m.remove()));

    let headers = Object.keys(Fielder.schema.paths)
      .filter(k => ['_id','__v'].indexOf(k) === -1);

    console.log(headers);

    await new Promise((resolve,reject) => {

      let buffer = [],
          counter = 0;

      let stream = fs.createReadStream('../data/Fielding.csv')
        .pipe(csv.parse({ headers }))
        .on("error", reject)
        .on("data", async doc => {
          stream.pause();
          buffer.push(doc);
          counter++;
          log(doc);
          try {
            if ( counter > 10000 ) {
              await Fielder.insertMany(buffer);
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
              await Fielder.insertMany(buffer);
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
mongoose = require('mongoose');
const fs = require('mz/fs');
const csv = require('fast-csv');

const Pitcher = require('../models/Pitcher');

mongoose.Promise = global.Promise;
mongoose.set('debug', true);

const log = data => console.log(JSON.stringify(data, undefined, 2));

(async function() {

  try {
    const conn = await mongoose.connect('mongodb+srv://dbUser:futtbucker@cluster0-uthwo.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    await Promise.all(Object.entries(conn.models).map(([k,m]) => m.remove()));

    let headers = Object.keys(Pitcher.schema.paths)
      .filter(k => ['_id','__v'].indexOf(k) === -1);

    console.log(headers);

    await new Promise((resolve,reject) => {

      let buffer = [],
          counter = 0;

      let stream = fs.createReadStream('../data/Pitching.csv')
        .pipe(csv.parse({ headers }))
        .on("error", reject)
        .on("data", async doc => {
          stream.pause();
          buffer.push(doc);
          counter++;
          log(doc);
          try {
            if ( counter > 10000 ) {
              await Pitcher.insertMany(buffer);
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
              await Pitcher.insertMany(buffer);
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
// const csvFilePath = './data/Pitching.csv'
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj);
// })


// fs.createReadStream('../data/Pitching.csv')
//     .pipe(csv.parse({ headers: true }))
//     .on("data", function(data){
        
//     })
//     .on("end", function(data){
//         console.log("Read Finished");
//     });

//module.exports = mongoose.model('Pitcher', Pitcher );

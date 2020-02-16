var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const personSchema = new Schema({
    playerID: String,
    birthYear: Number,
    birthMonth: Number,
    birthDay: Number,
    birthCountry: String,
    birthState: String,
    birthCity: String,
    deathYear: Number,
    deathMonth: Number,
    deathDay: Number,
    deathCountry: String,
    deathState: String,
    deathCity: String,
    nameFirst: String,
    nameLast: String,
    nameGiven: String,
    weight: Number,
    height: Number,
    bats: String,
    throws: String,
    debut: String,
    finalGame: String,
    retroID: String,
    bbrefID: String
  });

  // personSchema.virtual('hitters', {
  //   ref: 'Hitter',
  //   localField: '_id',
  //   foreignField: 'person'
  // })

  // personSchema.virtual('pitchers', {
  //   ref: 'Pitcher',
  //   localField: '_id',
  //   foreignField: 'person'
  // })

  // personSchema.virtual('fielders', {
  //   ref: 'Fielder',
  //   localField: '_id',
  //   foreignField: 'person'
  // })

  // personSchema.virtual('managers', {
  //   ref: 'Manager',
  //   localField: '_id',
  //   foreignField: 'person'
  // })
  
  const Person = mongoose.model('Person', personSchema);

  module.exports = Person;
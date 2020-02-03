var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const hitterSchema = new Schema({
  playerID: String,
  yearID: String,
  stint: Number,
  teamID: String,
  lgID: String,
  G: Number,
  AB: Number,
  R: Number,
  H: Number,
  doubles: Number,
  triples: Number,
  HR: Number,
  RBI: Number,
  SB: Number,
  CS: Number,
  BB: Number,
  SO: Number,
  IBB: Number,
  HBP: Number, 
  SH: Number,
  SF: Number,
  GIDP: Number
});

const Hitter = mongoose.model('Hitter', hitterSchema);

module.exports = Hitter;
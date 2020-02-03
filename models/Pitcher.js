var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const pitcherSchema = new Schema({
    playerID: String,
    yearID: String,
    stint: Number,
    teamID: String,
    lgID: String,
    W: Number,
    L: Number,
    G: Number,
    GS: Number,
    CG: Number,
    SHO: Number,
    SV: Number,
    IPouts: Number,
    H: Number,
    ER: Number,
    HR: Number,
    BB: Number,
    SO: Number,
    BAOpp: Number,
    ERA: Number,
    IBB: Number,
    WP: Number,
    HBP: Number,
    BK: Number,
    BFP: Number,
    GF: Number,
    R: Number,
    SH: Number,
    SF: Number,
    GIDP: Number
  });
  
  const Pitcher = mongoose.model('Pitcher', pitcherSchema);

  module.exports = Pitcher;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const teamSchema = new Schema({
    yearID: Number,
    lgID: String,
    teamID: String,
    franchID: String,
    divID: String,
    Rank: Number,
    G: Number,
    Ghome: Number,
    W: Number,
    L: Number,
    DivWin: String,
    WCWin: String,
    LgWin: String,
    WSWin: String,
    R: Number,
    AB: Number,
    H: Number,
    doubles: Number,
    triples: Number,
    HR: Number,
    BB: Number,
    SO: Number,
    SB: Number,
    CS: Number,
    HBP: Number,
    SF: Number,
    RA: Number,
    ER: Number,
    ERA: Number,
    CG: Number,
    SHO: Number,
    SV: Number,
    IPouts: Number,
    HA: Number,
    HRA: Number,
    BBA: Number,
    SOA: Number,
    E: Number,
    DP: Number,
    FP: Number,
    name: String,
    park: String,
    attendance: Number,
    BPF: Number,
    PPF: Number,
    teamIDBR: String,
    teamIDlahman45: String,
    teamIDretro: String
  });
  
  const Team = mongoose.model('Team', teamSchema);

  module.exports = Team;
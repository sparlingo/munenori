var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const teamSchema = new Schema({
    yearID: String,
    lgID: String,
    teamID: String,
    franchID: String,
    divID: String,
    Rank: String,
    G: String,
    Ghome: String,
    W: String,
    L: String,
    DivWin: String,
    WCWin: String,
    LgWin: String,
    WSWin: String,
    R: String,
    AB: String,
    H: String,
    doubles: String,
    triples: String,
    HR: String,
    BB: String,
    SO: String,
    SB: String,
    CS: String,
    HBP: String,
    SF: String,
    RA: String,
    ER: String,
    ERA: String,
    CG: String,
    SHO: String,
    SV: String,
    IPouts: String,
    HA: String,
    HRA: String,
    BBA: String,
    SOA: String,
    E: String,
    DP: String,
    FP: String,
    name: String,
    park: String,
    attendance: String,
    BPF: String,
    PPF: String,
    teamIDBR: String,
    teamIDlahman45: String,
    teamIDretro: String
  });
  
  const Team = mongoose.model('Team', teamSchema);

  module.exports = Team;
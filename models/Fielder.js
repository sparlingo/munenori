var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const fielderSchema = new Schema({
    playerID: String,
    yearID: String,
    sting: String,
    teamID: String,
    lgID: String,
    POS: String,
    G: String,
    GS: String,
    InnOut: String,
    PutOut: String,
    Assist: String,
    Error: String,
    DoublePlay: String,
    PassedBall: String,
    WildPitch: String,
    StolenBase: String,
    CaughtSteal: String,
    ZR: String,
    // person: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Person'
    // }
});

const Fielder = mongoose.model('Fielder', fielderSchema);

module.exports = Fielder;
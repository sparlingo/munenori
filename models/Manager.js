var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const managerSchema = new Schema({
    playerID: String,
    yearID: String,
    teamID: String,
    lgID: String,
    inSeason: String,
    games: String,
    wins: String,
    losses: String,
    ranks: String,
    playrMgr: String,
    // person: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Person'
    // }
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
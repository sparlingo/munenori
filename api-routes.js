let router = require('express').Router();
require('./models');

// Import models
var Hitter = require('./models/Hitter');
var Pitcher = require('./models/Pitcher');
//var Team = require('./models/Team');
// var Fielder = require('./models/Fielder');
// var Manager = require('./models/Manager');

router.get('/', function(req, res){
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Munenori'
    });
});

// Routes for hitters
router.get('/hitters', function(req, res){
    Hitter.find({ teamID: 'TOR' })
    .then(function(hitters){
        res.json(hitters);
    })
    .catch(function(err){
        res.send(err);
    })
});
router.get('/hitters/:id', function(req, res){
    Hitter.find({ teamID: 'TOR' }).where({ playerID: req.params.id })
    .then(function(hitters){
        res.json(hitters);
    })
    .catch(function(err){
        res.send(err);
    })
});


// Routes for pitchers
router.get('/pitchers', function(req, res){
    Pitcher.find({ teamID: 'TOR' })
    .then(function(pitchers){
        res.json(pitchers);
    })
    .catch(function(err){
        res.send(err);
    })
});
router.get('/pitchers/:id', function(req, res){
    Pitcher.find({ teamID: 'TOR' }).where({ playerID: req.params.id })
    .then(function(pitchers){
        res.json(pitchers);
    })
    .catch(function(err){
        res.send(err);
    })
});

// Routes for teams
// router.get('/teams', function(req, res){
//     Team.find({ teamID: 'TOR' })
//     .then(function(teams){
//         res.json(teams);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// });
// router.get('/team/:id', function(req, res){
//     Team.find({ teamID: 'TOR' }).where({ yearID: req.params.id })
//     .then(function(team){
//         res.json(team);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// });

// router.get('/fielders', function(req, res){
//     Fielder.find({ teamID: 'TOR' })
//     .then(function(fielders){
//         res.json(fielders);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// });

// router.get('/managers', function(req, res){
//     Manager.find({ teamID: 'TOR' })
//     .then(function(managers){
//         res.json(managers);
//     })
//     .catch(function(err){
//         res.send(err);
//     })
// });

module.exports = router;
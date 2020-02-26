let router = require('express').Router();
require('./models');

// Import models
let Person = require('./models/Person')
let Hitter = require('./models/Hitter');
let Pitcher = require('./models/Pitcher');
var Team = require('./models/Team');
// var Fielder = require('./models/Fielder');
// var Manager = require('./models/Manager');

router.get('/', function(req, res){
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Munenori'
    });
});

// Routes for People
router.get('/people', function(req, res){
    Person.find({})
    .then(function(people){
        res.json(people)
    })
    .catch(function(err){
        res.send(err)
    })
})

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
router.get('/hitter/:id', function(req, res){
    Hitter.find({ teamID: 'TOR' }).where({ playerID: req.params.id })
    .then(function(hitter){
        res.json(hitter);
    })
    .catch(function(err){
        res.send(err);
    })
});
router.get('/hitter/career/:id', function(req, res){
    Hitter.find({ teamID: 'TOR' }).where({ playerID: req.params.id })
    .then(function(hitter){
        let agg = {
            playerID: req.params.id,
            G: 0,
            AB: 0,
            R: 0,
            H: 0,
            doubles: 0,
            triples: 0,
            HR: 0,
            RBI: 0,
            SB: 0,
            CS: 0,
            BB: 0,
            SO: 0,
            IBB: 0,
            HBP: 0,
            SH: 0,
            SF: 0,
            GIDP: 0
        }
        
        hitter.forEach(hit => {
            agg['G'] += hit.G
            agg['AB'] += hit.AB
            agg['R'] += hit.R
            agg['H'] += hit.H
            agg['doubles'] += hit.doubles
            agg['triples'] += hit.triples
            agg['HR'] += hit.HR
            agg['RBI'] += hit.RBI
            agg['SB'] += hit.SB
            agg['CS'] += hit.CS
            agg['BB'] += hit.BB
            agg['SO'] += hit.SO
            agg['IBB'] += hit.IBB
            agg['HBP'] += hit.HBP
            agg['SH'] += hit.SH
            agg['SF'] += hit.SF
            agg['GIDP'] += hit.GIDP
        })
       
        res.json(agg)
    })
    .catch(function(err){
        res.send(err)
    })
})


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
router.get('/pitcher/:id', function(req, res){
    Pitcher.find({ teamID: 'TOR' }).where({ playerID: req.params.id })
    .then(function(pitchers){
        res.json(pitchers);
    })
    .catch(function(err){
        res.send(err);
    })
});

//Routes for teams
router.get('/teams', function(req, res){
    Team.find({ teamID: 'TOR' })
    .then(function(teams){
        res.json(teams);
    })
    .catch(function(err){
        res.send(err);
    })
});
router.get('/team/:id', function(req, res){
    Team.find({ teamID: 'TOR' }).where({ yearID: req.params.id })
    .then(function(team){
        res.json(team);
    })
    .catch(function(err){
        res.send(err);
    })
});

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
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql')


// api router

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port: conf.port,
    database: conf.database
})

connection.connect();

app.get('/players/:id', (req, res) => {
    var gameLevelDtlIdx = req.params.id;
    var sql = 'SELECT l_player1, l_team1, l_player2, l_team2, r_player1, r_team1, r_player2, r_team2 FROM scoreboard1 WHERE gameLevelDtlIdx=?';
    connection.query(sql, gameLevelDtlIdx, (err, players, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
        res.send(players);
    });
});

app.get('/compet/:id', (req, res) => {
    var gameLevelDtlIdx = req.params.id;
    var sql = 'SELECT gameTitle FROM scoreboard1 WHERE gameLevelDtlIdx=?';
    connection.query(sql, gameLevelDtlIdx, (err, compet, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        res.send(compet)
    })
})

app.get('/scoreboard/:id', (req, res) => {
    var gameLevelDtlIdx = req.params.id;
    var sql = 'SELECT l_setScore, l_score, r_setScore, r_score FROM scoreboard1 WHERE gameLevelDtlIdx=?';
    connection.query(sql, gameLevelDtlIdx, (err, scoreboard, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        res.send(scoreboard)
        
    })
})

app.post('/scoreboard/update', (req, res) => {
    var l_setScore = req.body.l_setScore;
    var l_score = req.body.l_score;
    var r_setScore = req.body.r_setScore;
    var r_score = req.body.r_setScore;
    var gameLevelDtlIdx = req.body.gameLevelDtlIdx;

    var sql = "UPDATE scoreboard1 SET l_setScore=?, l_score=?, r_setScore=?, r_score=? WHERE gameLevelDtlIdx=?"
    var params = [l_setScore, l_score, r_setScore, r_score, gameLevelDtlIdx]
    connection.query(sql, params, (err, result, fields) => {
        if (err){
            console.log(err);
            res.status(500).send("Internal Sever Error");
        } else {
            res.status(200).send("The data has been successfully updated!");
        }
    })
})

app.post('/scoreboard', (req, res) => {
    var nGameState = req.body.nGameState;
    var stadiumKey = req.body.stadiumKey;
    var stadiumName = req.body.stadiumName;
    var courtNum = req.body.courtNum;
    var gameDate = req.body.gameDate;
    var gameTitle  = req.body.gameTitle;
    var gameTitleIdx = req.body.gameTitleIdx;
    var gameLevelDtlIdx = req.body.gameLevelDtlIdx;
    var gameNum = req.body.gameNum;
    var teamGameNum = req.body.teamGameNum;
    var gameDtlName = req.body.gameDtlName;
    var l_groupIdx = req.body.l_groupIdx;
    var l_player1 = req.body.l_player1;
    var l_team1 = req.body.l_team1;
    var l_player2 = req.body.l_player2;
    var l_team2 = req.body.l_team2;
    var l_setScore = req.body.l_setScore;
    var l_score = req.body.l_score;
    var r_groupIdx = req.body.r_groupIdx;
    var r_player1 = req.body.r_player1;
    var r_team1 = req.body.r_team1;
    var r_player2 = req.body.r_player2;
    var r_team2 = req.body.r_team2;
    var r_setScore = req.body.r_setScore;
    var r_score = req.body.r_score;
    var servePos = req.body.servePos;
    var bChangePos = req.body.bChangePos;


    var sql = "INSERT INTO scoreboard1 (nGameState, stadiumKey, stadiumName, courtNum, gameDate, gameTitle, gameTitleIdx, gameLevelDtlIdx, gameNum, teamGameNum, gameDtlName, l_groupIdx, l_player1, l_team1, l_player2, l_team2, l_setScore, l_score, r_groupIdx, r_player1, r_team1, r_player2, r_team2, r_setScore, r_score, servePos, bChangePos) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var params = [nGameState, stadiumKey, stadiumName, courtNum, gameDate, gameTitle, gameTitleIdx,
        gameLevelDtlIdx, gameNum, teamGameNum, gameDtlName, l_groupIdx, l_player1, l_team1, l_player2, 
        l_team2, l_setScore, l_score, r_groupIdx, r_player1, r_team1, r_player2, r_team2, r_setScore,
        r_score, servePos, bChangePos]
    // 에러 처리
    connection.query(sql, params, (err, result, fields) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');

        } else {
            console.log('The data has been saved!');
            res.status(200).send('Success');
        }
    })
})

// exports 꼭 확인
module.exports = app;

const fs = require('fs');
const express = require('express');
const path = require('path');
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

app.get('/player', (req, res) => {
    var sql = 'SELECT * FROM player_info';
    connection.query(sql, (err, players, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send("Internal Server Error")
        } else{
        console.log(players)
        // var jsonData = JSON.stringify(players);
        //res.writeHead(200, 
        //    { "Content-Type" : "application/json;characterset=utf-8"}
        //);
        res.status(200).json({"player_info":players});
        }
    });
});

app.get('/player/:player_id', (req, res) => {
    let sql = 'SELECT * FROM player_info WHERE player_id = ?';
    let params = [req.query.player_id];
    connection.query(sql, params, 
        (err, player, fields) => {
            res.json(player);
        });
});

app.get('/compet', (req, res) => {
    var sql = 'SELECT * FROM compet_info';
    connection.query(sql, (err, compet, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        var val = compet;
        var jsonData = JSON.stringify(val);
        res.writeHead(200, 
            { "Content-Type" : "application/json;characterset=utf-8"}
        );
        res.write(jsonData);
    })
})

app.get('/game', (req, res) => {
    var sql = 'SELECT * FROM game_info';
    connection.query(sql, (err, game, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        var val = game;
        var jsonData = JSON.stringify(val);
        res.writeHead(200, 
            { "Content-Type" : "application/json;characterset=utf-8"}
        );
        res.write(jsonData);
    })
})

app.get('/scoreboard', (req, res) => {
    var sql = 'SELECT * FROM scoreboard';
    connection.query(sql, (err, scoreboard, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error')
        }
        var val = scoreboard;
        var jsonData = JSON.stringify(val);
        res.writeHead(200, 
            { "Content-Type" : "application/json;characterset=utf-8"}
        );
        res.write(jsonData);
    })
})

app.post('/player', (req, res) => {
    var player_id = req.body.player_id;
    var compet_id = req.body.compet_id;
    var player_name = req.body.player_name;
    var player_rank = req.body.player_rank;
    var player_team = req.body.player_team;
    var date_of_birth = req.body.date_of_birth;
    var nationality = req.body.nationality;
    var query = req.params;

    var sql = "INSERT INTO player_info (player_id, compet_id, player_name, player_rank, player_team, date_of_birth, nationality) VALUES (?, ?, ?, ?, ?, ?, ?)";
    var params = [player_id, compet_id, player_name, player_rank, player_team, date_of_birth, nationality]
    // 에러 캐치
    connection.query(sql, params, (err, result, fields) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');

        } else {
            console.log('The data has been saved!');
            res.status(200).send('Success');
            console.log(query);
        }
    })
})

app.post('/compet', (req, res) => {
    var compet_id = req.body.compet_id;
    var compet_title = req.body.compet_title;
    var location = req.body.location;
    var entry = req.body.entry;
    var season = req.body.season;
    var players_rank = req.body.players_rank;
    var date = req.body.date;
    var num_players = req.body.num_players;
    var compet_time = req.body.compet_time;
    var date_of_generate = req.body.date_of_generate;
    var date_of_update = req.body.date_of_update;
    var manager = req.body.manager;

    var sql = "INSERT INTO compet_info (compet_id, compet_title, location, entry, season, players_rank, date, num_players, compet_time, date_of_generate, date_of_update, manager) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)";
    var params = [compet_id, compet_title, location, entry, season,
         players_rank, date, num_players, compet_time, date_of_generate, date_of_update,
         manager]
    // 에러 캐치
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

app.post('/scoreboard', (req, res) => {
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
    var stadiumKey = req.body.stadiumKey;
    var stadiumName = req.body.stadiumName;
    var courtNum = req.body.courtNum;
    var gameDate = req.body.gameDate;
    var compet_title = req.body.compet_title;
    var compet_id = req.body.compet_id;
    var compet_level_idx = req.body.compet_level_idx;
    var game_id = req.body.game_id;
    var teamGameNum = req.body.teamGameNum;
    var gameDtlName = req.body.gameDtlName;

    var sql = "INSERT INTO scoreboard (l_groupIdx, l_player1, l_team1, l_player2, l_team2, l_setScore, l_score, r_groupIdx, r_player1, r_team1, r_player2, r_team2, r_setScore, r_score, stadiumKey, stadiumName, courtNum, gameDate, compet_title, compet_id, compet_level_idx, game_id, teamGameNum, gameDtlName) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var params = [l_groupIdx, l_player1, l_team1, l_player2, l_team2, l_setScore,
        l_score, r_groupIdx, r_player1, r_team1, r_player2, r_team2, r_setScore,
        r_score, stadiumKey, stadiumName, courtNum, gameDate, compet_title,
        compet_id, compet_level_idx, game_id, teamGameNum, gameDtlName]
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

module.exports = app;

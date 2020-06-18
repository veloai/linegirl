const mariadb = require('mariadb');
mariadb.createConnection({
    host: 'mydb.com',
    user: 'myUser',
    password: 'myPwd'
})
    .then(conn => {
        console.log("connected ! connection id is " + conn.threadId);
    })
    .catch(err => {
        console.log("not connected due to error: " + err);
    });

export default (req, res) => {

   /* connection.query(sql, gameLevelDtlIdx, (err, players, fields) => {
        if(err) {
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
        res.send(players);
    });
*/

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ api_name: 'compet_api' }))
}
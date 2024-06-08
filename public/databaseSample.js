const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root123',
  database : 'websiteSpaceRepository'
});

let blackHoleQuery = []

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);

    connection.query('SELECT * FROM `BLACK HOLES`', function(err,results,field){
       try {
        blackHoleQuery = results;
        console.log(blackHoleQuery);
       } catch (error) {
        console.log(err);
       }
    })


  });

module.exports = [blackHoleQuery];
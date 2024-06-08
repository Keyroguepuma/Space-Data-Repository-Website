const mysql = require('mysql');

let blackHoleQuery = [];

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'root123',
  database : 'websiteSpaceRepository'
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);

    connection.query('SELECT * FROM `Black Holes`',function(err,results,field){
      if (err) throw err;

      blackHoleQuery = results;
      console.log(blackHoleQuery);
    })


  });

  module.exports = {blackHoleQuery};
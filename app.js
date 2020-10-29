const express = require('express');
const app = express();

var SERVER_PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.use('/bootstrap',  express.static(__dirname + '/node_modules/bootstrap'));
app.use('/font-awesome',  express.static(__dirname + '/node_modules/font-awesome'));

app.listen(SERVER_PORT, function(){
  console.log('listening on *:' + SERVER_PORT);
});

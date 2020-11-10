const express = require('express');
const app = express();

var SERVER_PORT = 3000;

app.use(express.static(__dirname));

app.listen(SERVER_PORT, function(){
  console.log('listening on *:' + SERVER_PORT);
});

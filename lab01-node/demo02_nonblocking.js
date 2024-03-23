//non blocking
var fs = require('fs');
fs.readFile('./data/data_25mb.json', 'utf8', function(err, content) {
  console.log(content);
});

console.log("----------------------Done-----------------------");
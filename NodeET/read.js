var fs = require('fs');
var path = require('path');

fs.readdir('./lib', function(err, files) {
  files.forEach(function(fileName) {
    var file = path.join(__dirname, 'lib', fileName);
    var stats = fs.statSync(file);

    if(stats.isFile()) {
      fs.readFile(file, 'UTF-8', function(err, content) {
        console.log(content);
      });
    }
  })
})

// var contents = fs.readFile('./lib/spawn.js', 'UTF-8', function(err, content) {
//   console.log(content);

// });

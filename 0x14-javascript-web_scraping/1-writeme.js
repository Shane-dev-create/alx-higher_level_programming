#!/usr/bin/node
let fs = require('fs');
let file = process.argv[2];
let string = process.argv[3];

fs.writeFile(file, string, 'utf-8', function (err) {
  if (err) console.log(err);
});

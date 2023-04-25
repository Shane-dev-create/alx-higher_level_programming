#!/usr/bin/node
let request = require('request');
let fs = require('fs');
let url = process.argv[2];
let filePath = process.argv[3];

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(filePath, body, 'utf-8');
  }
});

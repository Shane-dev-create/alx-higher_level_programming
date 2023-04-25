#!/usr/bin/node

let request = require('request');
let num = process.argv[2];

request('https://swapi-api.hbtn.io/api/films/' + num, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});

#!/usr/bin/node
const request = require('request');
const url = 'https://swapi.co/api/films/' + process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let results = JSON.parse(body).characters;
    for (let i of results) {
      request(i, (x, y, z) => console.log(JSON.parse(z)['name']));
    }
  }
});

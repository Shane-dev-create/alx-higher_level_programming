#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const results = JSON.parse(body).results;
    const count = 0;
    for (const i in results) {
      for (let chars of results[i].characters) {
        if (chars.search('/18/') > 0) {
                        count += 1;
                 }
      }
    }
    console.log(count);
  }
});


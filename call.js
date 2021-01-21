const fetch = require('node-fetch');

fetch('https://my-json-server.typicode.com/tdijkmans/MAGAPI/1_jaar')
  .then((response) => response.json())
  .then((json) => console.log(json));

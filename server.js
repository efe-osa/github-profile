const http = require('http');
const static = require('node-static');

const port = 3000;
const file = new static.Server('./public');

const server = http.createServer((req, res) => {
  file.serve(req, res);
});
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});

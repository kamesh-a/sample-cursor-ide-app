const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let counter = 0;

const server = http.createServer((req, res) => {
  counter++;
  const currentDate = new Date().toISOString();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    date: currentDate,
    counter: counter
  }, null, 2) + '\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

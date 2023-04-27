const http = require('http');

const hostname = '::1';
const port = 9864;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hullo');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

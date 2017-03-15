const http = require('http');
const fs = require('fs');
const path = require('path');
const repos = require('./repos.json');
const handlers = require('./js/handlers.js')

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

console.log(handlers);

const handler = (req, res) => {
  const url = req.url;

  console.log('URL: ', url);

  if (url === '/' || url === '/fac') {
    handlers.serveFac(req, res);
  } else if (url === '/dwyl') {
    handlers.serveDwyl(req, res);
  } else if (url === '/css/stylesheet.css') {
    handlers.serveCss(req, res);
  } else if (url === '/js/request.js') {
    handlers.serveRequest(req, res);
  } else if (url === '/js/index.js') {
    fs.readFile(path.join(__dirname, 'js', 'index.js'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.end(file);
      }
    });
  } else if (url === '/api/repos/fac') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos.fac));
  } else if (url === '/api/repos/dwyl') {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(repos.dwyl));
  } else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('404 server error');
  }
}

const server = http.createServer(handler);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server: server,
  handler: handler
}

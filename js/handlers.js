var fs = require('fs');
var path = require('path');

function serveFac(req, res){
  fs.readFile(path.join(__dirname, '..', 'fac.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  });
}

function serveDwyl(req, res){
  fs.readFile(path.join(__dirname, '..', 'dwyl.html'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/html'});
      res.end(file);
    }
  });
}

function serveCss(req, res){
  fs.readFile(path.join(__dirname, '..', 'css', 'stylesheet.css'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/css'});
      res.end(file);
    }
  });
}

function serveRequest(req, res){
  fs.readFile(path.join(__dirname, 'request.js'), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'});
      res.end('server error');
    } else {
      res.writeHead(200, {'content-type': 'text/javascript'});
      res.end(file);
    }
  });
}

module.exports = {
  serveFac,
  serveDwyl,
  serveCss,
  serveRequest,

}

let connect = require('connect');
let serveStatic = require('serve-static');

const port = 4040;

connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on ' + port + '...');
});
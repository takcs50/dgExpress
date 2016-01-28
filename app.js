var express = require('express');
var app = express();

// openshift server configuration
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// To use EJS Template Engine with Express
app.set('view engine', 'ejs');

// To set an alternative folder to use other than defaul views
/*app.set('views', __dirname + '/foldername');*/

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: (['Tariq', 'Ryan', 'Ilan', 'Anwar']).sort()
    });
});

app.get('/about', function(req, res) {
    res.render('default', {
        title: 'About Us',
        classname: 'about'
    });
});

app.get('*', function(req, res) {
    res.send('<h3 style="color: #2A2AD7; text-align: center;">Bad Route</h3>');
});

/*var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});*/

// for deployment to openshift
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
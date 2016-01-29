var express = require('express');
var app = express();

// openshift server configuration
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

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

// server ports for deployment to openshift or for localhost
app.listen(port, ipaddr, function () {
  console.log("Listening on " + ipaddr + ", server_port " + port);
});

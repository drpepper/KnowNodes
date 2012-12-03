
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , knownodeAPI = require('./routes/knownodeAPI')
  , userAPI = require('./routes/userAPI')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/partials/:name', routes.partials);

app.get('/knownodeAPI/nodes', knownodeAPI.knownodes);

app.get('/knownodeAPI/post/:id', knownodeAPI.knownode);
app.post('/knownodeAPI/post', knownodeAPI.addKnownode);
app.put('/knownodeAPI/post/:id', knownodeAPI.editKnownode);
app.delete('/knownodeAPI/post/:id', knownodeAPI.deleteKnownode);

app.post('/userAPI/addUser', userAPI.addUser);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

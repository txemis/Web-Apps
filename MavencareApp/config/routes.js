var React= require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var TodayContainer = require('../containers/TodayContainer');
var MedListContainer = require('../containers/MedListContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='today' component={TodayContainer} />
      <Route path='medlist' component={MedListContainer} />
    </Route>
  </Router>
);

module.exports = routes;

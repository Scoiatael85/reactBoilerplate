var React = require('react');
var ReactDOM = require('react-DOM');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);
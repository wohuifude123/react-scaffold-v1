import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './modules/App';

ReactDOM.render(
    <Router>
        <Switch>
        	<Route path="/" component={App} />
        </Switch>
    </Router>,
    document.getElementById('root'), function () {
    	//
    }
);

// 设置所有模块接受热更新
if (module.hot) {
    module.hot.accept();
}

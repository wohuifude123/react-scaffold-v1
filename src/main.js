import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './modules/App';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import IndexLayout from './layouts/IndexLayout';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/add">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

const Roster = () => (
	<div>
		<Switch>
			<Route exact path='/' component={HomeLayout} />
			<Route path="/users/add" component={UserAddPage} />
			<Route path="/index/add" component={IndexLayout} />
		</Switch>
	</div>
)

ReactDOM.render(
    <Router>
    	<Switch>
    		<Roster />
        	<Route path="/user/add" component={UserAddPage} />
        	<Route path="/demo" component={HomeLayout} />
    	</Switch>
    </Router>,
    document.getElementById('root'), ()=>{
    	//
    }
);

// 设置所有模块接受热更新
if (module.hot) {
    module.hot.accept();
}

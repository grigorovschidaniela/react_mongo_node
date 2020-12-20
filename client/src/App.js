import React, { Component } from 'react';
import './App.css';
import Login from "./login/Login";
import { NavLink, Switch, Route } from 'react-router-dom';

class AppMain extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.fetchData()
			.then(res => {
			this.setState({data: res});

		})
      .catch(err => console.log('error: '+err));
	}

	fetchData = async () => {
		const response = await fetch('/api');
		const body = response.json();
		return body;
	};

	render() {
		return (
			<div>
				<h1>Database connection state: </h1>
				<h4 key={this.state.data}>{this.state.data.name}</h4>
			</div>
		);
	}
}

const App = () => (
	<div className='app'>
	  <h1>React Router Demo</h1>
	  <Navigation />
	  <Main />
	</div>
  );

const Navigation = () => (
	<nav>
	  <ul>
		<li><NavLink exact activeClassName="current" to='/'>Dummy Data</NavLink></li>
		<li><NavLink exact activeClassName="current" to='/agTime'>Aggregation Time</NavLink></li>
		<li><NavLink exact activeClassName="current" to='/login'>Login</NavLink></li>
	  </ul>
	</nav>
  );
  
  const Main = () => (
	<Switch>
	  <Route exact path='/' component={Home}></Route>
	  <Route exact path='/agTime' component={AgrTime}></Route>
	  <Route exact path='/login' component={Login}></Route>
	</Switch>
  );
  
  const Home = () => (
	<div className='home'>
		<AppMain/>	  
	</div>
  );
  
  const AgrTime = () => (
	<div className='about'>
	  <h1>Aggregation Time</h1>
	</div>
  );
  

export default App;
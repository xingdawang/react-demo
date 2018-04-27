import React, { Component } from 'react'
// Material UI
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Custom component
import OptionsFormSelector from '../containers/options-form-selector'
import GiveFeedback from '../containers/give-feedback'
import Results from './results'
import NotFound from './not-found'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"open": false
		};
	}

	handleToggle = () => this.setState({open: !this.state.open});


	render() {
		return (
			<div>

				{/* Global App Bar */}
				<AppBar
					title="Thanks for attending React presentation, now it's your time to decide the next!"
					onLeftIconButtonClick={this.handleToggle}
				/>

				{/* Global Drawer with App Bar */}
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<AppBar title = "Menu"/>
					<MenuItem href = "/" >Give Feedback</MenuItem>
					<MenuItem href = "results" >See Results</MenuItem>
				</Drawer>

				{/* Router to define the component and url mapping */}
				<Router>
					<Switch>
						<Route path = '/' exact component = { GiveFeedback } />
						<Route path = '/results' component = { Results } />
						<Route component = { NotFound } />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App

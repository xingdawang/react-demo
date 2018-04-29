import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';

// Import action.
import { selectProject } from '../actions'

// Import redux.
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class VoteProjects extends Component {

	/*
	 * After the user click the favorite projects, update the state.
	 * 
	 * Note: Ideally, component should be stateless, which mean, state should be only
	 * controlled by Redux, but in this component, adding dynamic new project state
	 * should be processed after the 'render' method, as reducer need a pure function
	 * (predictable result function). 
	*/
	componentDidUpdate = () => {
		this.getState()
	}

	// Keep current project selection state.
	state = {
		gallery: false,
		healthCalculator: false
	}

	render() {
		return (
			<div>
				<h1>Vote Projects</h1>
				<Checkbox
					label="ES6"
					checked={true}
					disabled={true}
				/>
				<Checkbox
					label="Gallery"
					onCheck={ () => this.selectProject("gallery") }
				/>
				<Checkbox
					label="Health Calculator"
					onCheck={ () => this.selectProject("healthCalculator") }
				/>
			</div>
		)
	}

	// Toggle project status.
	selectProject = (project) => {
		if(project === "gallery") {
			this.setState((oldState) => {
				return({
					gallery: !oldState.gallery,
					healthCalculator: oldState.healthCalculator
				})
			})
		} else if(project === "healthCalculator"){
			this.setState((oldState) =>{
				return({
					gallery: oldState.gallery,
					healthCalculator: !oldState.healthCalculator
				})
			})
		}
	}

	// State wrapper to return gallery and health calculator state.
	getState = () => {
		this.props.currentProject(this.state)
	}
}

// Redux method to retrieve interest and project properties.
const mapStateToProps = (state) => {
	return {
		interest: state.interestChoice,
		project: state.projectChoice
	}
}

// Redux method to dispatch currentProject method to selectProject action.
const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({currentProject: selectProject}, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(VoteProjects)

import React, { Component } from 'react'

// Material UI Component.
import RaisedButton from 'material-ui/RaisedButton'

// import graphql.
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Import redux.
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import actions.
import { interestSelected } from '../actions'

// Import custom component.
import VoteProjects from './vote-projects'

class VoteInterest extends Component {

	render() {
		return (
			<div>
				<h1> { this.props.interest.currentSurface } </h1>
				{ this.loadContent(this.props.interest.currentSurface) }
				<RaisedButton
					label="Vote"
					primary={true}
					disabled = {this.props.interest.votedStatus}
					onClick={ 
						() => { this.voteInterest(this.props.interest.currentSurface) }
					}
				/>
				<RaisedButton
					label="Back"
					secondary={true}
					href='/'
				/>
				{this.props.interest.votedStatus ?
					<div>
						<h2>Fancy about others opinion?</h2>
						<RaisedButton label="Results" primary={true} href='/results' />
					</div>:
					""
				}

			</div>
		)
	}

	// Load different content according to the interest.
	loadContent = (choice) => {
		if(choice === "theory") {
			return (
				<ul>
					<li>GraphQL + </li>
						<p>description description</p>
						<p>description description</p>
					<li>Redux</li>
						<p>description description</p>
						<p>description description</p>
				</ul>
			)
		} else if(choice === "practice") {
			return (
				<div>
					<ul>
						<li>ES6 + </li>
							<p>description description</p>
							<p>description description</p>
						<li>Gallery</li>
							<p>description description</p>
							<p>description description</p>
						<li>Health Calculator</li>
							<p>description description</p>
							<p>description description</p>
					</ul>
					<VoteProjects />
					{console.log("props", this.props.project)}
				</div>
			)
		}
	}

	// Callback event to trigger GraphCool.
	voteInterest = async (choice) => {
		/*
		 * When user selects the projects, Redux store will save the user behaviour, and ideally, here the vote
		 * callback function should send conditional GraphQL query, but no documentation found on react-apollo,
		 * or GraphCool about the conditional mutation. So a not perfect solution here is to create EMPTY data
		 * if unavoidable, even though user select theory which no projects involved.
		*/
		let gallery = ""
		let healthCalculator = ""
		if(this.props.project) {
			gallery = this.props.project.gallery ? "gallery" : ""
			healthCalculator = this.props.project.healthCalculator ? "healthCalculator" : ""
		}
		await this.props.createCombinationMutation({variables: {choice, gallery, healthCalculator}})
		// Set vote button status (VotedStatus) to be 'true' after each click.
		this.props.setVoteState()
	}
}

// Redux method to retrieve interest and project properties.
const mapStateToProps = (state) => {
	return {
		interest: state.interestChoice,
		project: state.projectChoice
	}
}

// Redux method to dispatch vote status.
const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		setVoteState: interestSelected
	}, dispatch)
}

// GraphQL to create multiple mutation on Interest and projects.
const CREATE_COMBINATION_MUTATION = gql`
	mutation CombinationMutation($choice: String!, $gallery: String!, $healthCalculator: String!) {
		createInterest(name: $choice){name}
		createProjectGallery: createProject(name: $gallery){name}
		createProjectHealthCalculator: createProject(name: $healthCalculator){name}
	}
`

// Bind GraphQL to current class to create Interest.
const CreateMutation = graphql(CREATE_COMBINATION_MUTATION, {
	name: 'createCombinationMutation'
})(VoteInterest)

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(CreateMutation)
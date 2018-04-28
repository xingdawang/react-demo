import React, { Component } from 'react'

// Material UI Component.
import RaisedButton from 'material-ui/RaisedButton'

// import graphql.
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Import action.
import { clearOption } from '../actions'

// Import redux.
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
					onClick={ () => this.voteInterest(this.props.interest.currentSurface) }
				/>
				<RaisedButton
					label="Back"
					secondary={true}
					href='/'
				/>
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
				</div>
			)
		}
	}

	// Callback event to trigger GraphCool.
	voteInterest = async (choice) => {
		await this.props.createInterestMutation({variables: {choice}})
		// console.log("in voteInterest", this.props)
	}
}

// Redux method to retrieve interest and project properties.
const mapStateToProps = (state) => {
	return {
		interest: state.interestChoice,
		project: state.projectChoice
	}
}

// GraphQL to take choice as parameter and create Interest.
const CREATE_INTEREST_MUTATION = gql`
	mutation CreateInterestMutation($choice: String!) {
		createInterest(name: $choice) {
			name
		}
	}
`

// Bind GraphQL to current class to create Interest.
const CreateMutation = graphql(CREATE_INTEREST_MUTATION, {
	name: 'createInterestMutation'
})(VoteInterest)

export default connect(
	mapStateToProps
)(CreateMutation)
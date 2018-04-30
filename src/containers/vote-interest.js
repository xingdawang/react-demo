import React, { Component } from 'react'

// Material UI Component.
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

// Import React flexbox Grid
import { Row, Col } from 'react-flexbox-grid'

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
				<div className="center-wrapper">
					<h1> { this.props.interest.currentSurface } </h1>
				</div>
				{ this.loadContent(this.props.interest.currentSurface) }
				<Row around="md">
					<Col md={6}>
						<div className="interest-button-wrapper">
							<RaisedButton
								label="Vote"
								primary={true}
								disabled={this.props.interest.votedStatus}
								className="vote-button"
								onClick={ () => this.voteInterest(this.props.interest.currentSurface) }
							/>
							<RaisedButton
								label="Back"
								secondary={true}
								className="back-button"
								href='/'
							/>
						</div>
					</Col>
				</Row>
				{this.props.interest.votedStatus ?
					<div className="center-wrapper">
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
				<div className="detail-content">
					<List>
						<ListItem
							primaryText="GraphQL"
							leftIcon={<img alt="graphql" src={require('../assets/icons/graphql.png')} />}
							style={{"color": "#1fbcd3"}}
						/>
							<p>description description</p>
							<p>description description</p>
						<ListItem
							primaryText="Redux"
							leftIcon={<img alt="redux" src={require('../assets/icons/redux.png')} />}
							style={{"color": "#1fbcd3"}}
						/>
							<p>description description</p>
							<p>description description</p>
					</List>
				</div>
			)
		} else if(choice === "practice") {
			return (
				<div className="detail-content">
					<List>
						<ListItem
							primaryText="ES6"
							leftIcon={<img alt="es6" src={require('../assets/icons/js.png')} />}
							style={{"color": "#fc4482"}}
						/>
							<p>description description</p>
							<p>description description</p>
						<ListItem
							primaryText="Gallery"
							leftIcon={<img alt="gallery" src={require('../assets/icons/gallery.png')} />}
							style={{"color": "#fc4482"}}
						/>
							<p>description description</p>
							<p>description description</p>
						<ListItem
							primaryText="Health Calculator"
							leftIcon={<img alt="health calculator" src={require('../assets/icons/health.png')} />}
							style={{"color": "#fc4482"}}
						/>
							<p>description description</p>
							<p>description description</p>
					</List>
					<VoteProjects />
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
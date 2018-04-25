import React, { Component } from 'react'
// import OptionsForm from '../components/options-form.js'
// import redux libraries
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
// import actions
import { optionSelector } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'


class OptionsFormSelector extends Component {


	render() {

		// If page is still loading.
		if(this.props.allInterestsQuery.loading) {
			return (<h1>loading</h1>)
		}

		// After the page is fully loaded.
		return (
			<div>
				{this.props.allInterestsQuery.allInterests && this.props.allInterestsQuery.allInterests.map(
					interest => (
						<p key = {interest.id}>
							{interest.name} / {parseInt(interest.number)} / {interest.id}
						</p>
					)
				)}

				<h2>Choose your favorite part</h2>

				<RaisedButton
					label="Theory"
					primary={true}
					onClick={ () => {
							// Get the interest status of a category.
							const interest = this.packageState("Theory")
							// Update interest vote (this.props.interestStatus) through redux.
							this.props.addInterestVoteByOne(interest)
							// Update GraphCool Interest number
							this.updateInterestNumber(this.props.interestStatus)
					}}
				/>
				<RaisedButton
					label="Practise"
					href="/practise"
					secondary={true}
				/>
				{ console.log('this props', this.props.interestStatus) }
			</div>
		)
	}

	//package state for reducer
	packageState = (name) => {
		const interestNumber = this.getInterestNumber(name)
		return {
			"name": name,
			"number": interestNumber
		}
	}

	// Retrieve the interest number based on the vote
	getInterestNumber = (name) => {
		let number = -1;
		if(this.props.allInterestsQuery.allInterests) {
			this.props.allInterestsQuery.allInterests.map( interest => {
				if(interest.name === name)
					number = interest.number
			})
			return number
		}
		return number
	}

	// Update GraphCool with new status
	updateInterestNumber = async (interest) => {
		// console.log('this props2', this.props.interestStatus)
		console.log('interest', interest)
		// if(this.props.interestStatus !== null) {
		// 	await this.props.updateInterestMutation({variables: interest.number})
		// }
		// await this.props.updateInterestMutation({variables: this.props.interestStatus.number})
	}
}

const mapStateToProps = (state) => {
	return {
		interestStatus: state.formReducer
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({addInterestVoteByOne: optionSelector}, dispatch)
}

// Query for reading data with GraphQL
const ALL_INTERESTS_QUERY = gql`
  query AllInterestsQuery {
  allInterests{
    id
    name
    number
  }
}
`
// Function for processing GraphQL with GraphCool
const ListAllInterestsQuery = graphql(ALL_INTERESTS_QUERY, {
  name: 'allInterestsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(OptionsFormSelector)

// // Mutation for updating data with GraphQL
// const UPDATE_INTEREST_MUTATION = gql`
// 	mutation UpdateInterestMutation ($interest_number: Int){
// 		updateInterest(id: "cjgcgrcof6ps00104rxq9i5lb", number: $interest_number) {
// 			number
// 		}
// 	}
// `

// // Mutate operation for GraphCool to update interest
// const updateInterestMutation = graphql(UPDATE_INTEREST_MUTATION, {
// 	name: 'updateInterestMutation'
// })(OptionsFormSelector)

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(ListAllInterestsQuery)
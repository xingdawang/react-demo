import React, { Component } from 'react'

// import graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Results extends Component {

	render() {
		if(this.props.allPostQuery.loading) {
			return (
				<h1>Loading from {process.env.REACT_APP_GRAPHQL_ENDPOINT}</h1>
			)
		}

		console.log(this.getProjectNumber())

		return (
			<h1>This is results page.</h1>
		)
	}

	// Retrieve Interest selection result.
	getInterestNumber = () => {
		let theory = 0
		let practice = 0
		this.props.allPostQuery.allInterests.map( interest => {
			if(interest.name === "theory")
				theory ++
			else if(interest.name === "practice")
				practice ++
		})
		return {
			"theory": theory,
			"practice": practice
		}
	}

	// Retrieve Projects selection result.
	getProjectNumber = () => {
		let gallery = 0;
		let healthCalculator = 0
		this.props.allPostQuery.allProjects.map( project => {
			if(project.name === "gallery")
				gallery ++
			else if(project.name === "healthCalculator")
				healthCalculator ++
		})
		return {
			"gallery": gallery,
			"healthCalculator": healthCalculator
		}
	}
}

// GraphQL query to retrieve Interests and Projects.
const ALL_POSTS_QUERY = gql`
	query {
		allInterests { name }
		allProjects {name }
	}
`

const GetInterestAndProjectQuery = graphql(ALL_POSTS_QUERY, {
	name: 'allPostQuery',
	options: {
		fetchPolicy: 'network-only'
	}
})(Results)

export default GetInterestAndProjectQuery

import React, { Component } from 'react'

// Import graphql.
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Import Reat Google Charts.
import { Chart } from 'react-google-charts'

class Results extends Component {

	render() {
		if(this.props.allPostQuery.loading) {
			return (
				<h1>Loading</h1>
			)
		}

		const interest = this.getInterestNumber()
		const project = this.getProjectNumber()
		return (
			<div>
				<h1>Results</h1>
				<Chart
					chartType="PieChart"
					data={[
						['Label', 'Value'],
						[`Theory (${interest.theory} voted)`, Number(interest.theory)],
						[`Practice (${interest.practice} voted)`, Number(interest.practice)]
					]}
					options = {{
						title: "Theory vs Practice",
						is3D: true,
						colors: ['#1fbcd3', '#f4a442']
					}}
					graph_id="PieChartGraph"
					width="100%"
					height="300px"
					legend_toggle
				/>
				<Chart
					chartType="ColumnChart"
					data = {[
						['Label', 'Voted'],
						[`Gallery (${project.gallery} voted)`, Number(project.gallery)],
						[`Health Calculator (${project.healthCalculator} voted)`, Number(project.healthCalculator)]
					]}
					options={{
						title: "Gallery & Health Calculator",
						bar: {groupWidth: "30%"},
						colors: ['#1fbcd3'],
						hAxis: {
							title: "Gallery & Health Calculator"
						},
						vAxis: {
							title: "Voted Number",
							minValue: 0,
							viewWindow: { min: 0 },
							format: '0'
						}
					}}
					graph_id="ColumnChartGraph"
					width="100%"
					height="300px"
					legend_toggle
				/>
			</div>
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

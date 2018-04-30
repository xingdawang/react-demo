import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

class TheoryIntroduction extends Component {
	render() {
		return (
			<div>
				<div className="center-wrapper">
					<h2>Theory</h2>
				</div>
				<div className="intro-content">
					<List>
						<ListItem
							primaryText="GraphQL"
							leftIcon={<img alt="graphql" src={require('../assets/icons/graphql.png')} />}
							style={{"color": "#1fbcd3"}}
						/>
							<p>GraphQL is a data query language developed internally by Facebook in 2012
							before being publicly released in 2015.</p>
							<p>It provides an alternative to REST and ad-hoc webservice architectures.
							It allows clients to define the structure of the data required, and exactly
							the same structure of the data is returned from the server.</p>
						<ListItem
							primaryText="Redux"
							leftIcon={<img alt="redux" src={require('../assets/icons/redux.png')} />}
							style={{"color": "#1fbcd3"}}
						/>
							<p>Redux provides a solid, stable and mature solution to managing state
							in your React application. </p>
							<p>It helps you write applications that behave consistently, run in different
							environments (client, server, and native), and are easy to test.</p>
					</List>
				</div>
			</div>
		)
	}
}

export default TheoryIntroduction
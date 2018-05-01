import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

class TheoryDetails extends Component {
	render() {
		return(
			<List>
				<ListItem
					primaryText="GraphQL"
					leftIcon={<img alt="graphql" src={require('../assets/icons/graphql.png')} />}
					style={{"color": "#1fbcd3"}}
				/>
					<p>A query language for your API</p>
					<p>GraphQL is a query language for APIs and a runtime for fulfilling those queries
					with your existing data. GraphQL provides a complete and understandable description
					of the data in your API, gives clients the power to ask for exactly what they need
					and nothing more, makes it easier to evolve APIs over time, and enables powerful
					developer tools.</p>
				<ListItem
					primaryText="Redux"
					leftIcon={<img alt="redux" src={require('../assets/icons/redux.png')} />}
					style={{"color": "#1fbcd3"}}
				/>
					<p>Redux is a predictable state container for JavaScript apps.</p>
					<p>It helps you write applications that behave consistently, run in different environments
					(client, server, and native), and are easy to test. On top of that, it provides a great
					developer experience, such as live code editing combined with a time traveling debugger.</p>
					<p>You can use Redux together with React, or with any other view library.</p>
			</List>
		)
	}
}

export default TheoryDetails
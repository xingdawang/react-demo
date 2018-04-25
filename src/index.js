import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
// Material UI theme wrapper
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// React Redix & reducers
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
// Apollo and GraphQL
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer)

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjgc4vzfq3k7s0145vp3m57fv' })

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})

ReactDOM.render(
	<MuiThemeProvider>
		<ApolloProvider client={client}>
			<Provider store = {store}>
				<App />
			</Provider>
		</ApolloProvider>
	</MuiThemeProvider>,
	document.getElementById('root'));
registerServiceWorker();

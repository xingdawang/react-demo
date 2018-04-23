import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
// Material UI theme wrapper
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// React Redix & reducers
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer)

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store = {store}>
			<App />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root'));
registerServiceWorker();

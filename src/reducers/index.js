import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import custom reducers
import OptionsReducer from './test'
import FormReducer from './form-reducer'

const rootReducer = combineReducers({
	test: OptionsReducer,
	formReducer: FormReducer,
	form: formReducer
})

export default rootReducer

import { combineReducers } from 'redux'
// import custom reducers
import OptionsReducer from './test'
import FormReducer from './form-reducer'

const rootReducer = combineReducers({
	test: OptionsReducer,
	formReducer: FormReducer
})

export default rootReducer

import { combineReducers } from 'redux'

// import custom reducers
import InterestChoice from './surface-reducer'

const rootReducer = combineReducers({
	interestChoice: InterestChoice
})

export default rootReducer

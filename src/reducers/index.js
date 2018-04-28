import { combineReducers } from 'redux'

// import custom reducers.
import InterestChoice from './interest-reducer'
import ProjectChoice from './project-reducer'

const rootReducer = combineReducers({
	interestChoice: InterestChoice,
	projectChoice: ProjectChoice 
})

export default rootReducer

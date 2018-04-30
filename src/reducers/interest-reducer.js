export default function(state = null, action) {
	switch(action.type) {
		case "GET_INTEREST":
			return action.payload
		case "INTEREST_SELECTED":
			return Object.assign({}, state, {
				votedStatus: true
			})
		default:
			return state
	}
}

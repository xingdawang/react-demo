export default function(state = null, action) {
	switch(action.type) {
		case "GET_INTEREST":
			return action.payload
		case "CLEAR_OPTION":
			return {currentSurface: null}
		default:
			return state
	}
}

export default function(state = null, action) {
	switch(action.type) {
		case "GET_INTEREST":
			return action.payload
		default:
			return state
	}
}

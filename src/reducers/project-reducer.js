export default function(state = null, action) {
	// console.log("reducer", action.payload)
	switch(action.type) {
		case "SELECT_GALLERY":
			return action.payload
		case "SELECT_HEALTH_CALCULATOR":
			return {currentSurface: null}
		default:
			return state
	}
}
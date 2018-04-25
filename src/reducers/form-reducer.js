export default function(state = null, action) {
	switch(action.type) {
		case "SELECT_OPTION":
			return {
				name: action.payload.name,
				number: action.payload.number + 1
			}
		default:
			return state
	}
}

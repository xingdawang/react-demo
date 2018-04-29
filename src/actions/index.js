export const optionSelector = (options) => {
	return {
		type: "GET_INTEREST",
		payload: options
	}
}

export const selectProject = (options) => {
	return {
		type: "SELECT_PROJECT",
		payload: options
	}
}

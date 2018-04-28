export const optionSelector = (options) => {
	return {
		type: "GET_INTEREST",
		payload: options
	}
}

export const clearOption = (options) => {
	return {
		type: "CLEAR_OPTION",
		payload: options
	}
}

export const selectProject = (options) => {
	return {
		type: "SELECT_PROJECT",
		payload: options
	}
}

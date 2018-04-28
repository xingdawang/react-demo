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

export const selectGallery = (options) => {
	return {
		type: "SELECT_GALLERY",
		payload: options
	}
}

export const selectHealthCalculator = (options) => {
	return {
		type: "SELECT_HEALTH_CALCULATOR",
		payload: options
	}
}
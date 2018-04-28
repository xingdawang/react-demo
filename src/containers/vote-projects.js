import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox';

// Import action.
import { selectGallery, selectHealthCalculator } from '../actions'

// Import redux.
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class VoteProjects extends Component {
	render() {
		console.log('interest', this.props)
		return (
			<div>
				<h1>Vote Projects</h1>
				<Checkbox
					label="ES6"
					checked={true}
					disabled={true}
				/>
				<Checkbox
					label="Gallery"
					onCheck={ this.checkGallery }
				/>
				<Checkbox
					label="Health Calculator"
					onCheck={ this.checkHealthCalculator }
				/>
			</div>
		)
	}

	checkGallery = () => {
		console.log("Gallery", this.state)
	}

	checkHealthCalculator = () => {
		console.log("HealthCalculator")
	}
}

const mapStateToProps = (state) => {
	return {
		interest: state.interestChoice
	}
}

export default connect(
	mapStateToProps
)(VoteProjects)

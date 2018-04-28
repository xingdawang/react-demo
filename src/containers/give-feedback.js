import React, { Component } from 'react'

// Material UI Component.
import RaisedButton from 'material-ui/RaisedButton'

// Import redux.
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import action.
import { optionSelector } from '../actions'

// Import custom component.
import TheoryIntroduction from '../components/theory-introduction'
import PracticeIntroduction from '../components/practice-introduction'
import VoteInterest from './vote-interest'

class GiveFeedback extends Component {

	render() {
		if(this.props.currentChoice === null) {
			return (
				<div>
					<TheoryIntroduction />
					<RaisedButton
						label="Theory"
						primary={true}
						onClick={ () => this.showSurface("theory") }
					/>
					<PracticeIntroduction />
					<RaisedButton
						label="Practice"
						secondary={true}
						onClick={ () => this.showSurface("practice") }
					/>
				</div>
			)
		} else {
			return (
				<VoteInterest />
			)
		}
	}

	// Setup surface according to the selected interest for redux action.
	showSurface = (interest) => (
		this.props.selectInterest({"currentSurface": interest})
	)
}

// Get user selected interest state.
const mapStateToProps = (state) => {
	return {
		currentChoice: state.interestChoice
	}
}

// Setup user selected state.
const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		selectInterest: optionSelector
	}, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(GiveFeedback)
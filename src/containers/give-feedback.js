import React, { Component } from 'react'

// Material UI Component
import RaisedButton from 'material-ui/RaisedButton'

// Import custom component
import TheoryDetails from '../components/theory-details'
import PracticeDetails from '../components/practice-details'

// Import redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import action
import { optionSelector } from '../actions'

class GiveFeedback extends Component {

	render() {
		if(this.props.currentChoice === null) {
			return (
				<div>
					<TheoryDetails />
					<RaisedButton
						label="Theory"
						primary={true}
						onClick={ () => this.showSurface("theory") }
					/>
					<PracticeDetails />
					<RaisedButton
						label="Practice"
						secondary={true}
						onClick={ () => this.showSurface("practice") }
					/>
					{ console.log('props current surface: ', this.props.currentChoice) }
				</div>
			)
		} else if(this.props.currentChoice.currentSurface === 'theory') {
			return (
				<p>
					this is theory page
				</p>
			)
		} else {
			return (
				<div>
					this is practice page
				</div>
			)
		}
	}

	showSurface = (interest) => (
		this.props.selectInterest({"currentSurface": interest})
	)
}

const mapStateToProps = (state) => {
	return {
		currentChoice: state.interestChoice
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		selectInterest: optionSelector
	}, dispatch)
}

export default connect(
	mapStateToProps,
	matchDispatchToProps
)(GiveFeedback)
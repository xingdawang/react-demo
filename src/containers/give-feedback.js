import React, { Component } from 'react'

// Material UI Component.
import RaisedButton from 'material-ui/RaisedButton'

// Import React flexbox Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

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
				<Grid>
					<Row around="md">
						<Col md={4}>
							<TheoryIntroduction />
							<div className="interest-button-wrapper">
								<RaisedButton
									label="Theory"
									primary={true}
									className="interest-button"
									onClick={ () => this.showSurface("theory") }
								/>
							</div>
						</Col>
						<Col md={4}>
							<PracticeIntroduction />
							<div className="interest-button-wrapper">
								<RaisedButton
									label="Practice"
									secondary={true}
									className="interest-button"
									onClick={ () => this.showSurface("practice") }
								/>
							</div>
						</Col>
					</Row>
				</Grid>
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
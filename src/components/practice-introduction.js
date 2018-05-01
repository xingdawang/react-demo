import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

class PracticeIntroduction extends Component {
	render() {
		return (
			<div>
				<div className="center-wrapper">
					<h2>Practice</h2>
				</div>
				<div className="intro-content">
					<List>
						<ListItem
							primaryText="ES6"
							leftIcon={<img alt="es6" src={require('../assets/icons/js.png')} />}
							style={{"color": "#fc4482"}}
						/>
							<p>ECMAScript 6 (ES6), also known as ECMAScript 2015, is the latest
							version of the ECMAScript standard.</p>
						<ListItem
							primaryText="Gallery"
							leftIcon={<img alt="gallery" src={require('../assets/icons/gallery.png')} />}
							style={{"color": "#fc4482"}}
						/>
							<p>A small website that loads the predefined images, and shows your favorite images.</p>
							<p>The website will cover react, props & state, component lifecycle and CSS3.</p>
						<ListItem
							primaryText="Health Calculator"
							leftIcon={<img alt="health calculator" src={require('../assets/icons/health.png')} />}
							style={{"color": "#fc4482"}}
						/>
							<p>A medium seiz sebsite that helps user to calculate Body Mass Index (BMI) and Body
							Fat Percentage (BFP).</p>
							<p>The website will cover react, props & state, component lifecycle, Sass, and Google Charts.</p>
					</List>
				</div>
			</div>
		)
	}
}

export default PracticeIntroduction
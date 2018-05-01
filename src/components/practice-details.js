import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'

class PracticeDetails extends Component {
	render() {
		return(
			<List>
				<ListItem
					primaryText="ES6"
					leftIcon={<img alt="es6" src={require('../assets/icons/js.png')} />}
					style={{"color": "#fc4482"}}
				/>
					<p>The 6th edition, officially known as ECMAScript 2015, was finalized in June 2015.This
					update adds significant new syntax for writing complex applications, including classes
					and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode.
					Other new features include iterators and for/of loops, Python-style generators and generator
					expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak
					maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for
					virtual objects and wrappers). The complete list is extensive.</p>
					<p>Browser support for ES2015 is still incomplete. However, ES2015 code can be transpiled
					into ES5 code, which has more consistent support across browsers. Transpiling adds an extra
					step to build processes whereas polyfills allow adding extra functionalities by including
					another JavaScript file.</p>
				<ListItem
					primaryText="Gallery"
					leftIcon={<img alt="gallery" src={require('../assets/icons/gallery.png')} />}
					style={{"color": "#fc4482"}}
				/>
					<p>A small website that loads your favourite images and show them in a beautiful, highly
					customized gallery website.</p>
					<p>To start this practise, you will be given a customized framework, which already setup
					all of the scaffolding tools, including webpack, ES6, babel, autoprefixer, and other
					amazing packages.</p>
					<p>With this trouble free start, all you need is to write some React code, and some
					knowledge of math and styling.</p>
					<GridList>
						<Subheader>Childhood</Subheader>
							<GridTile
								key="gallery-1-project"
								title="Gallery Project"
								titlePosition="top"
								rows={2}
								cols={((window.innerWidth) < 800 ? 2 : 1)}
								titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
								subtitle={<span><b>We all have a colorful childhood</b></span>}
							>
								<img alt="gallery project" src={require("../assets/images/gallery-1-project.png")} />
							</GridTile>
							<GridTile
								key="gallery-2-project"
								title="Gallery Project"
								titlePosition="top"
								rows={2}
								cols={((window.innerWidth) < 800 ? 2 : 1)}
								titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
								subtitle={<span><b>Each childhood has a vivid dream</b></span>}
							>
								<img alt="gallery project" src={require("../assets/images/gallery-2-project.png")} />
							</GridTile>
					</GridList>
				<ListItem
					primaryText="Health Calculator"
					leftIcon={<img alt="health calculator" src={require('../assets/icons/health.png')} />}
					style={{"color": "#fc4482"}}
				/>
					<p>A medium sized website that helps user to calculate their health condition, including
					Body Mass Index (BMI) and Body Fat Percentage (BFP).</p>
					<p>This project will also give you a good start point, including the webpack and many other
					necessary packages already configured, so that you have pain-fee to learn and enjoy the React
					fancy world.</p>
					<p>In this a little complex website, you will not only experience React components, props &
					state and lifecycles, but also play with Sass, and many other famous 3rd packages like
					react-router and Google Charts.</p>
					<GridList
						cols={3}
					>
						<Subheader>Health Calculator</Subheader>
						<GridTile
							key="health-calculator-2-project"
							title="Health Calculator Project"
							titlePosition="top"
							rows={2}
							cols={((window.innerWidth) < 800 ? 3 : 1)}
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
							subtitle={<span><b>Give some hint on your weight and when it's recorded</b></span>}
						>
							<img alt="health calculator project" src={require("../assets/images/health-calculator-1.png")} />
						</GridTile>
						<GridTile
							key="health-calculator-1-project"
							title="Health Calculator Project"
							titlePosition="top"
							rows={2}
							cols={((window.innerWidth) < 800 ? 3 : 1)}
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
							subtitle={<span><b>Guide you with the most intuitive view on your health condition</b></span>}
						>
							<img alt="health calculator project" src={require("../assets/images/health-calculator-2.png")} />
						</GridTile>
						<GridTile
							key="health-calculator-3-project"
							title="Health Calculator Project"
							titlePosition="top"
							rows={2}
							cols={((window.innerWidth) < 800 ? 3 : 1)}
							titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)"
							subtitle={<span><b>Help you to trace the health condition over time</b></span>}
						>
							<img alt="health calculator project" src={require("../assets/images/health-calculator-3.png")} />
						</GridTile>
					</GridList>
			</List>
		)
	}
}

export default PracticeDetails
import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';


const InstructorItem = props => {
	return(
		<li>
			<h3>{props.name}</h3>
			<h4>
				hobbies: {props.hobbies.join(", ")}
			</h4>	
		</li>
	);
}

InstructorItem.propTypes = {
	name: PropTypes.string,
	hobbies: PropTypes.arrayOf(PropTypes.string)
};

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			instructors: [
				{
					name: "Tim",
					hobbies: ["sailing", "crying"]
				},
				{
					name: "Jong",
					hobbies: ["Killing", "Men"]
				},
				{
					name: "Muhammad Ali",
					hobbies: ["suicide", "Bomber"]
				},
				{
					name: "Osama",
					hobbies: ["RDX", "Maths"]
				}
			] 
		};

		setTimeout(() => {
			const randInst = Math.floor(Math.random()*this.state.instructors.length);
			const hobbyIndex = Math.floor(Math.random()*this.state.instructors[randInst].length);
			const instructors = this.state.instructors.map((inst, i) => {
				if(i === randInst){
					const hobbies = inst.hobbies.slice();
					hobbies.splice(hobbyIndex, 1);
					return {
						...inst,
						hobbies
					};
				}

				return inst;
			});
			// instructors[randInst] = Object.assign({}, instructors[randInst]);
			// instructors[randInst].hobbies = instructors[randInst].hobbies.slice();
			// instructors[randInst].hobbies.splice(hobbyIndex, 1);
			this.setState({instructors});
		}, 5000);
	}

	render(){
		const instructors = this.state.instructors.map((instructor, index) => (
			<InstructorItem 
			key={index} 
			name = {instructor.name}
			hobbies = {instructor.hobbies}
			/>));
		return(
			<div className="App">
				<ul>
					{instructors}
				</ul>
			</div>		
		);
	}
}


export default App;

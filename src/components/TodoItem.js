import React from 'react';
import PropTypes from 'prop-types';


// NOTE TO SELF******* ALWAYS USE DOUBLE
// CURLY BRACES FOR IN-LINE STYLING
// e.g. <div style={{backgroundColor: '#f4f4f4'}} > </div>

export class TodoItem extends React.Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}


	// markComplete = (e) => {
	// 	console.log(this.props);
	// }

	render() {
		const {id, title } = this.props.todo
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
					{title} {' '} 
					<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: 'white',
	border: 'none',
	padding: '5px 7.5px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}


// styling can be in-line, set as a constant or as a function
// const itemsStyle = {
// 	backgroundColor: '#f4f4f4',
// 	fontFamily: 'cursive'
// }

export default TodoItem
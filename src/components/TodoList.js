import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        onClick = {() => this.props.onSelectTodo(todo)}
                        key={index}/>
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    onSelectTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

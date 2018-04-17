import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { selectStart, selectEnd, selectMove, selectTodo } from './actions'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import WordPanel from './components/WordPanel'

class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, todos, visibilityFilter, grid } = this.props
        return (
            <div>
                <WordPanel
                    grid={grid}
                    onMouseDown={(row, col) =>
                        dispatch(selectStart(row, col))
                    }
                    onMouseUp={(row, col) =>
                        dispatch(selectEnd(row, col))
                    }
                    onMouseMove={(row, col) =>
                        dispatch(selectMove(row, col))
                    }
                />
                <TodoList todos={todos}
                    onSelectTodo={(todo) =>
                        dispatch(selectTodo(todo))
                    }
                />
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired,
    grid: PropTypes.arrayOf(PropTypes.shape({
        chars: PropTypes.arrayOf(PropTypes.shape({
            text : PropTypes.string.isRequired,
            confirmed: PropTypes.bool.isRequired,
            selected: PropTypes.bool.isRequired,
            hovered: PropTypes.bool.isRequired
        }).isRequired).isRequired
    }).isRequired).isRequired
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter,
        grid: state.grid
    }
}

export default connect(select)(App)

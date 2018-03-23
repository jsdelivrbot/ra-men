import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, SELECT_START, SELECT_END, MOVE_ENTER, MOVE_LEAVE } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

function grid(state = [], action) {
    var result;
    switch (action.type) {
        case SELECT_START:
            result = state.map((row, rowIdx) => {
                return {
                    chars: row.chars.map((cell, colIdx) => {
                        return {
                            ...cell
                        }
                    })
                }
            })
            break;

        case SELECT_END:
            // console.log(action);
            result = state.map((row, rowIdx) => {
                return {
                    chars: row.chars.map((cell, colIdx) => {
                        return {
                            ...cell
                        }
                    })
                }
            })
            break;

        case MOVE_ENTER:
            result = state.map((row, rowIdx) => {
                return {
                    chars: row.chars.map((cell, colIdx) => {
                        return {
                            ...cell,
                            hovered: rowIdx === action.row && colIdx === action.col
                        }
                    })
                }
            })
            // console.log(result);
            break;

        case MOVE_LEAVE:
            result = state.map((row, rowIdx) => {
                return {
                    chars: row.chars.map((cell, colIdx) => {
                        return {
                            ...cell,
                            hovered: rowIdx === action.row && colIdx === action.col ? !cell.hovered : false
                        }
                    })
                }
            })
            break;

        default:
            return state;
    }
    return result;
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    grid
})

export default todoApp

import { combineReducers } from 'redux'
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, SELECT_START, SELECT_END, MOVE_ENTER, MOVE_LEAVE} from './actions'
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
    switch (action.type) {
        case SELECT_START:
            console.log(action);
            break;

        case SELECT_END:
            console.log(action);
            break;

        case MOVE_ENTER:
            console.log(action);
            break;

        case MOVE_LEAVE:
            console.log(action);
            break;

        default:
            return state;
    }
    return state;
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    grid
})

export default todoApp

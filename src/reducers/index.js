import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import grid from './grid';

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    grid
})

export default todoApp
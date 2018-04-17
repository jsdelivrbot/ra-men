import { combineReducers } from 'redux'
import { SELECT_START, SELECT_END, SELECT_MOVE, MOVE_ENTER, MOVE_LEAVE } from '../actions'

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
        case SELECT_MOVE:
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

        default:
            return state;
    }
    return result;
}


export default grid;
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SELECT_START = 'SELECT_START';
export const SELECT_END = 'SELECT_END';
export const SELECT_MOVE = 'SELECT_MOVE';
export const MOVE_ENTER = 'MOVE_ENTER';
export const MOVE_LEAVE = 'MOVE_LEAVE';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function selectTodo(todo) {
    return { type: SELECT_TODO, todo }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function selectStart(row, col) {
    return {
        type: SELECT_START,
        row: row,
        col: col
    }
}

export function selectEnd(row, col) {
    return {
        type: SELECT_END,
        row: row,
        col: col
    }
}

export function selectMove(row, col) {
    return {
        type: SELECT_MOVE,
        row: row,
        col: col
    }
}

export function moveEnter(row, col) {
    return {
        type: MOVE_ENTER,
        row: row,
        col: col
    }
}

export function moveLeave(row, col) {
    return {
        type: MOVE_LEAVE,
        row: row,
        col: col
    }
}

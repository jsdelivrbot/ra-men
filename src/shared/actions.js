/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SELECT_START = 'SELECT_START';
export const SELECT_END = 'SELECT_END';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
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

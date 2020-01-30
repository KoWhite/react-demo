import { CHANGE_INPUT_VALUE, CLICK_VALUE, DELETE_VALUE } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === CLICK_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);       
        return newState;
    }
    return state
}
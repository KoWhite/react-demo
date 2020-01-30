import { CHANGE_INPUT_VALUE, CLICK_VALUE, DELETE_VALUE } from './actionTypes'

export const changeValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const clickValue = () => ({
    type: CLICK_VALUE
})

export const deleteValue = (index) =>({
    type: DELETE_VALUE,
    index
})
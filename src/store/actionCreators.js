import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes';

export const inputFocus = () => ({
    type: SEARCH_FOCUS
})

export const inputBlur = () => ({
    type: SEARCH_BLUR
})
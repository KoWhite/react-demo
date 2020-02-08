import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (result, page) => ({
    type: actionTypes.ADD_LIST_DATA,
    list: fromJS(result),
    page
})

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.list;
            const action = addHomeList(result, page + 1);
            dispatch(action);
        })
    }
}
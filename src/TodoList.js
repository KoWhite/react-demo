import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import { getInitList, getInputChangeAction, addTodoItemAction, deleteTodoItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

export default class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount () {
        const action = getInitList();
        store.dispatch(action);
        // axios.get('/list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // })
    }

    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange () {
        this.setState(store.getState())
    }

    handleBtnClick () {
        const action = addTodoItemAction();
        store.dispatch(action);
    }

    handleItemClick (index) {
        const action = deleteTodoItemAction(index);
        store.dispatch(action);
    }
 
    render() {
        return <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemClick={this.handleItemClick}
        />
    }
}
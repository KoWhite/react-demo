import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeValue, clickValue, deleteValue } from './store/actionCreators'

class TodoList extends Component {
    render () {
        const { inputValue, list, changeInputValue, clickValue, clickDelete } = this.props;

        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={clickValue}>提交</button>
                </div>
                <ul>
                    {list.map((item, index) => <li onClick={() => {clickDelete(index)}} key={index}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue (e) {
            const action = changeValue(e.target.value);
            dispatch(action);
        },
        clickValue () {
            const action = clickValue();
            dispatch(action);
        },
        clickDelete (index) {
            const action = deleteValue(index);
            dispatch(action);
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
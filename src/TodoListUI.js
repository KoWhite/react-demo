import React from 'react';
import { Input, Button, List  } from 'antd';


const TodoListUI = (props) => {
    return (
        <div>
            <div style={{margin: '20px 0 0 20px'}}>
                <Input 
                    placeholder="Basic usage" 
                    style={{width: '300px', marginRight: '10px' }} 
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>发送</Button>
                <List
                    style={{marginTop: '10px', width: '370px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={() => {props.handleItemClick(index)}}>{item}</List.Item>}
                />
            </div>
        </div>
    )
}

export default TodoListUI;
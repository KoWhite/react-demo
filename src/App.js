import React, { Component } from 'react';
import { GlobalStyled } from './style';
import Header from './common/header/index.js';
import { IconStyled } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <GlobalStyled />
                <IconStyled />
                <Header />
            </Provider>
        )
    }
}

export default App;
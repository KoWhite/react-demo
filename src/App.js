import React, { Component } from 'react';
import { GlobalStyled } from './style';
import Header from './common/header/index.js';
import { IconStyled } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyled />
                    <IconStyled />
                    <Header />
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                        </div> 
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default App;
import React, { Component } from 'react';
import { GlobalStyled } from './style';
import Header from './common/header/index.js';
import { IconStyled } from './statics/iconfont/iconfont';
import store from './store/index';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyled />
                    <IconStyled />
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                            <Route path='/write' exact component={Write} />
                        </div> 
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default App;
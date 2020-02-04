import React, { Component, Fragment } from 'react';
import { GlobalStyled } from './style';
import Header from './common/header/index.js';
import { IconStyled } from './statics/iconfont/iconfont';

class App extends Component {
    render () {
        return (
            <Fragment>
                <GlobalStyled />
                <IconStyled />
                <Header />
            </Fragment>
        )
    }
}

export default App;
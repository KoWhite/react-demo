import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
import { connect } from 'react-redux';

//  无状态组件，性能优异
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocused}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span 
                        className={props.focused ? 'focused iconfont' : 'iconfont'}
                    >&#xe623;</span>
                </SearchWrapper>
            </Nav>
            <Addition> 
                <Button className='writting'>
                    <span className="iconfont">&#xe615;</span>写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocused () {
            const action = actionCreators.inputFocus();
            dispatch(action);
        },
        handleInputBlur () {
            const action = actionCreators.inputBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
import React, { PureComponent } from 'react';
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
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  无状态组件，性能优异
class Header extends PureComponent {
    render () {
        const { focused, list, handleInputFocused, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/"> 
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={()=> {handleInputFocused(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span 
                            className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
                        >&#xe623;</span>
                        {this.getListArea()}
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

    getListArea () {
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        
        if (jsList.length) {
            for (let i = ((page - 1) * 10); i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave ={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>{
                            handleChangePage(page, totalPage, this.spinIcon)
                        }}>
                            <span 
                                ref={(Icon) => {this.spinIcon = Icon}} 
                                className="iconfont spin"
                            >&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocused (list) {
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.inputFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.inputBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage (page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
            
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
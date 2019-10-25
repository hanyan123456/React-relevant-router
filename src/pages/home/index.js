import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Switch, Redirect, NavLink } from 'react-router-dom';
import { Route, Switch, } from 'react-router-dom';
import './index.css'
import Navigation from '../../component/Navigation'
import TopMenu from './component/topMenu'
import Clothes from './component/clothes'
import Shoes from './component/shoes'


class Home extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div className='home'>
                <div>home</div>
                <TopMenu></TopMenu>
                <div>

                    <Switch>
                        {/* 默认第一个组件 */}
                        <Route path="/home" exact component={Clothes} />
                        <Route path="/home/clothes" exact component={Clothes} />
                        <Route path="/home/shoes" component={Shoes} />
                    </Switch>

                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './topMenu.css'

class TopMenu extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className='topMenu'>

                <ul className='topMenu-header'>
                    {/* 默认显示第一个 */}
                    <li> < NavLink to='/home/clothes'>衣服</ NavLink></li>
                    <li> < NavLink to='/home/shoes'>鞋子</ NavLink></li>
                    <li>帽子</li>
                    <li>衣服</li>
                    <li>鞋子</li>
                    <li>帽子</li>
                    <li>衣服</li>
                    <li>鞋子</li>
                    <li>帽子</li>
                    <li>衣服</li>
                    <li>鞋子</li>
                    <li>帽子</li>
                </ul>
            </div>
        );
    }
}

TopMenu.propTypes = {};

export default TopMenu;
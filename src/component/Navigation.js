
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navigation.css'
class Navigation extends Component {
    render() {
        return (
            <div>
                <div className='navigation'>
                    <div className='navigation-nav'>
                        <Link to='/home' className='navigation-nav-item'>首页</Link>
                        <Link to='/shopping' className='navigation-nav-item'>购物</Link>
                        <Link to='myInfo' className='navigation-nav-item'>我的</Link>
                        {/* <NavLink to='/' className='navigation-nav-item'>首页</NavLink>
                        <NavLink to='/shopping' className='navigation-nav-item'>购物</NavLink>
                        <NavLink to='myInfo' className='navigation-nav-item'>我的</NavLink> */}
                    </div>
                </div>
            </div>


        )
    }
}
export default Navigation
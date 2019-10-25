import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Navigation from '../../component/Navigation'
class MyInfo extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div>
                MyInfo
                <Navigation></Navigation>
            </div>
        );
    }
}

MyInfo.propTypes = {};

export default MyInfo;
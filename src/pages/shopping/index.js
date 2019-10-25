import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Navigation from '../../component/Navigation'

class Shopping extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div>Shopping
                <Navigation></Navigation>
            </div>
        );
    }
}

Shopping.propTypes = {};

export default Shopping;
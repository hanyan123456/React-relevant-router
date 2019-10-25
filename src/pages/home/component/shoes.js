import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Shoes extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div>Shoes</div>
        );
    }
}

Shoes.propTypes = {};

export default Shoes;
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './clothes.css'

class Clothes extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {};
    }

    render() {
        return (
            <div className='clothes'>
                Clothes
            </div>
        );
    }
}

Clothes.propTypes = {};

export default Clothes;
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Alphabeta extends Component {
    render() {
        return (
            <span
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
                onTouchStart={this.props.onMouseDown}
                onTouchEnd={this.props.onMouseUp}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                style={{
                    background: this.props.confirmed 
                        ? 'lightgray' 
                        : (this.props.selected
                            ? 'pink' 
                            : (this.props.hovered ? 'lightblue' : 'white'))
                }}>
                {this.props.text}
            </span>
        )
    }
}

Alphabeta.propTypes = {
    // onMouseEnter: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    hovered: PropTypes.bool.isRequired
}

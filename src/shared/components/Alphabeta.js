import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

export default class Alphabeta extends Component {

    render() {
        const colour = this.props.confirmed ? 'lightgray'
                : this.props.selected ? 'pink'
                : this.props.hovered ? 'lightblue' : 'lightgreen';
        const Alphabeta = styled.span`
            background: ${colour};
            margin: 15px;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
        `;
        return (
            <Alphabeta
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
                onTouchStart={this.props.onMouseDown}
                onTouchEnd={this.props.onMouseUp}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
            >
                {this.props.text}
            </Alphabeta>
        )
    }
}

Alphabeta.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    hovered: PropTypes.bool.isRequired
}

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

export default class Alphabeta extends Component {

    render() {
        const colour = this.props.confirmed ? 'lightgray'
                : this.props.selected ? 'pink'
                : this.props.hovered ? 'lightpink' : 'lightgreen';
        const Alphabeta = styled.div`
            background: ${colour};
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            margin: 3px;
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
                onMouseMove={this.props.onMouseMove}
            >
                {this.props.text}
            </Alphabeta>
        )
    }
}

Alphabeta.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    confirmed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    hovered: PropTypes.bool.isRequired
}

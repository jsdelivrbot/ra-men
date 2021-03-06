import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'
import Alphabeta from './Alphabeta'

export default class WordPanel extends Component {
    render() {
        const AlphabetaRow = styled.div`
            line-height: 30px;
        `;
        return (
            <div>
            {this.props.grid.map((row, rowIndex) =>
                <AlphabetaRow key={rowIndex}>
                {row.chars.map((char, colIndex) =>
                    <Alphabeta {...char}
                        key={rowIndex + '_' + colIndex}
                        onMouseDown={() => this.props.onMouseDown(rowIndex, colIndex)}
                        onMouseUp={() => this.props.onMouseUp(rowIndex, colIndex)}
                        onMouseMove={() => this.props.onMouseMove(rowIndex, colIndex)}
                    />
                )}
                </AlphabetaRow>
            )}
            </div>
        )
    }
}

WordPanel.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    grid: PropTypes.arrayOf(PropTypes.shape({
        chars: PropTypes.arrayOf(PropTypes.shape({
            text : PropTypes.string.isRequired,
            confirmed: PropTypes.bool.isRequired,
            selected: PropTypes.bool.isRequired,
            hovered: PropTypes.bool.isRequired
        }).isRequired).isRequired
    }).isRequired).isRequired
}

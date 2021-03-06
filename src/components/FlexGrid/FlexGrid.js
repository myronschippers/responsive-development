import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

import './FlexGrid.css';

const STYLES = {
    row: 'grid',
    col: 'grid-col',
    sizeBase: 'grid-col_',
    sizeSmBp: 'sm',
    sizeMdBp: 'md',
    sizeLgBp: 'lg',
    size1: 'grid-col_1',
    size2: 'grid-col_2',
    size3: 'grid-col_3',
    size4: 'grid-col_4',
    size5: 'grid-col_5',
    size6: 'grid-col_6',
    size7: 'grid-col_7',
    size8: 'grid-col_8',
    size9: 'grid-col_9',
    size10: 'grid-col_10',
    size11: 'grid-col_11',
    size12: 'grid-col_12',
};

class FlexGrid extends Component {
    render() {
        let gridStyles = null;

        if (this.props.row != null) {
            gridStyles = STYLES.row;
        } else if (this.props.col != null) {
            gridStyles = STYLES.col;
        }

        // ADD BASE SIZING
        if (this.props.size != null
            && this.props.size > 0
            && this.props.size < 13
        ) {
            const baseSizeProp = `size${this.props.size}`;
            gridStyles += ` ${STYLES[baseSizeProp]}`;
        }

        // ADD BP SIZING
        const bpSizing = [
            'sizeSm',
            'sizeMd',
            'sizeLg',
        ];
        bpSizing.forEach(sizeKey => {
            const styleKey = `${sizeKey}Bp`;
            if (this.props[sizeKey] != null
                && this.props[sizeKey] > 0
                && this.props[sizeKey] < 13
            ) {
                const bpSize = this.props[sizeKey];
                gridStyles += ` ${STYLES.sizeBase}${STYLES[styleKey]}${bpSize}`;
            }
        });

        return(
            <div className={gridStyles}>
                {this.props.children}
            </div>
        )
    }
};

export default connect(mapStateToProps)(FlexGrid);

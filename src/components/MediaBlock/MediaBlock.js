import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

import './MediaBlock.css';

const STYLES = {
    media: 'mediaBlock-media',
    mediaLeft: 'mediaBlock-media_shiftLeft',
    mediaRight: 'mediaBlock-media_shiftRight',
};

class Template extends Component {
    render() {
        let mediaStyles = STYLES.media;

        if (this.props.mediaLeft) {
            mediaStyles += ` ${STYLES.mediaLeft}`;
        } else if (this.props.mediaRight) {
            mediaStyles += ` ${STYLES.mediaRight}`;
        }

        return(
            <div className="mediaBlock">
                <div className="mediaBlock-content">
                    {this.props.children}
                </div>
                <div className={mediaStyles}>
                    {this.props.imgSrc &&
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                    }
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(Template);

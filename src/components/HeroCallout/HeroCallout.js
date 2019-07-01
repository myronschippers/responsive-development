import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

import './HeroCallout.css';

class HeroCallout extends Component {
    render() {
        return(
            <div className="hero">
                <div className="hero-callout">
                    <h2 className="hero-callout-title">
                        Welcome and...<br/>
                        Hail Enhydra!
                    </h2>
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(HeroCallout);

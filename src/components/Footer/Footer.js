import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

import './Footer.css';

class Template extends Component {
    render() {
        return(
            <footer className="footer">
                &copy;Prime Digital Academy
            </footer>
        )
    }
};

export default connect(mapStateToProps)(Template);

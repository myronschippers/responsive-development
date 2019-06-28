import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

class Template extends Component {
    render() {
        return(
            <footer>
                Footer Content
            </footer>
        )
    }
};

export default connect(mapStateToProps)(Template);

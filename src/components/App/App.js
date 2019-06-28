import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

// LAYOUT COMPONENTS
import AppTopper from '../AppToppers/AppTopper';
import Footer from '../Footer/Footer';

// PAGE COMPONENTS
import HomePage from '../HomePage/HomePage';

class Template extends Component {
    render() {
        return(
            <Router>
                <div>
                    <AppTopper />

                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={HomePage}
                            />
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </Router>
        )
    }
};

export default connect(mapStateToProps)(Template);

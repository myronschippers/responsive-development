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
import HomePage from '../pages/HomePage/HomePage';
import FluidFixedPage from '../pages/FluidFixedPage/FluidFixedPage';

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

                            <Route
                                path="/fluid-fixed"
                                component={FluidFixedPage}
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

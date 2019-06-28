
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

class AppTopper extends Component {
    render() {
        return(
            <header className="appTopper">
                <div className="appTopper-identity">
                    <h1>Responsive</h1>
                </div>
                <div className="appTopper-actions">
                    <nav className="nav">
                        <button className="nav-mobileAct" onClick={this.onToggleMobileNav}>
                            Navigation
                        </button>
                        <ul className="nav-list">
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Store</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
};

export default connect(mapStateToProps)(AppTopper);

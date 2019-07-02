
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

// STYLING
import './AppTopper.css';

class AppTopper extends Component {
    state = {
        isNavOpen: false,
    };

    onToggleMobileNav = (event) => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        let navPaneStyles = 'nav-pane';

        if (this.state.isNavOpen) {
            navPaneStyles += ' nav-pane_isOpen';
        }

        return(
            <header className="appTopper">
                <div className="appTopper-identity">
                    <div className="logo">
                        <svg className="logo-img" viewBox="0 0 512 512">
                            <use xlinkHref="/images/responsive-icon.svg#responsive"></use>
                        </svg>
                        <h1 className="logo-text">Responsive</h1>
                    </div>
                </div>
                <div className="appTopper-actions">
                    <nav className="nav">
                        <button
                            className="nav-mobileAct"
                            onClick={this.onToggleMobileNav}
                        >
                            Navigation
                        </button>

                        <div className={navPaneStyles}>
                            <div className="nav-pane-hd">
                                <button
                                    className="btnClose"
                                    onClick={this.onToggleMobileNav}
                                >
                                    Close
                                </button>
                            </div>
                            <ul className="nav-pane-list">
                                <li>
                                    <a className="navLink" href="/">About</a>
                                </li>
                                <li>
                                    <a className="navLink" href="/">Store</a>
                                </li>
                                <li>
                                    <a className="navLink" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
};

export default connect(mapStateToProps)(AppTopper);

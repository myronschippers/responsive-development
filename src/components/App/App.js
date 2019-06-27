import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

import './App.css';

class Template extends Component {
    render() {
        return(
            <div>
                <header>
                    <div>
                        <h1>Responsive</h1>
                    </div>
                    <div>
                        <nav>
                            <button onClick={this.onToggleMobileNav}>
                                Navigation
                            </button>
                            <ul>
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

                <div>
                    <div>
                        <div>
                            Hail Enhydra!
                            <button onClick={this.onSignUp}>SIGN UP</button>
                        </div>
                    </div>

                    
                    Body Content
                </div>

                <footer>
                    Footer Content
                </footer>
            </div>
        )
    }
};

export default connect(mapStateToProps)(Template);

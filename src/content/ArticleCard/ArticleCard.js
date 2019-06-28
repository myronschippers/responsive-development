import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

import './ArticleCard.css';

class ArticleCard extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-title">
                    <h4>Article Title</h4>
                </div>
                <div className="card-bd">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
                        Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus.&nbsp;
                        Vestibulum ut posuere odio.&nbsp;
                        In hac habitasse platea dictumst.&nbsp;
                        Nullam aliquam fringilla risus, et hendrerit sem congue ac.&nbsp;
                        Morbi non ante maximus, pharetra metus et, pretium risus.
                    </p>
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(ArticleCard);

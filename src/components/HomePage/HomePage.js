import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

// CONTENT IMPORTS
import ArticleCard from '../../content/ArticleCard/ArticleCard';

class HomePage extends Component {
    render() {
        return(
            <div>
                <div className="hero">
                    <div className="hero-callout">
                        <h2 className="hero-callout">Welcome and... Hail Enhydra!</h2>
                    </div>
                </div>

                <div className="vr vr_3x">
                    <div className="mediaBlock">
                        <div className="mediaBlock-content">
                            <h3>Enhydra is Cill</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus. Vestibulum ut posuere odio. In hac habitasse platea dictumst. Nullam aliquam fringilla risus, et hendrerit sem congue ac. Morbi non ante maximus, pharetra metus et, pretium risus.</p>
                        </div>
                        <div className="mediaBlock-media mediaBlock-media_shiftRight">
                            <img src="/images/otter-chill.jpg" alt="Relaxing Otter" />
                        </div>
                    </div>
                </div>

                <div className="vr vr_3x">
                    <div className="mediaBlock">
                        <div className="mediaBlock-content">
                            <h3>Enhydra is Curious</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut posuere odio. In hac habitasse platea dictumst. Nullam aliquam fringilla risus, et hendrerit sem congue ac. Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus.</p>
                        </div>
                        <div className="mediaBlock-media mediaBlock-media_shiftLeft">
                            <img src="/images/otter-hide-and-seek.jpg" alt="Hide and Seek Otter" />
                        </div>
                    </div>
                </div>

                <div className="grid">
                    <div className="grid-col grid-col_12">
                        <ArticleCard />
                    </div>
                    <div className="grid-col grid-col_12">
                        <ArticleCard />
                    </div>
                    <div className="grid-col grid-col_12">
                        <ArticleCard />
                    </div>
                </div>

                <div>
                    <button className="btn">Learn More</button>
                </div>

            </div>
        )
    }
};

export default connect(mapStateToProps)(HomePage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

// CONTENT IMPORTS
import ArticleCard from '../../content/ArticleCard/ArticleCard';
import FlexGrid from '../FlexGrid/FlexGrid';
import MediaBlock from '../MediaBlock/MediaBlock';

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
                    <MediaBlock
                        imgSrc="/images/otter-chill.jpg"
                        imgAlt="Relaxing Otter"
                        mediaRight
                    >
                            <h3>Enhydra is Cill</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus. Vestibulum ut posuere odio. In hac habitasse platea dictumst. Nullam aliquam fringilla risus, et hendrerit sem congue ac. Morbi non ante maximus, pharetra metus et, pretium risus.</p>
                    </MediaBlock>
                </div>

                <div className="vr vr_3x">
                    <MediaBlock
                        imgSrc="/images/otter-hide-and-seek.jpg"
                        imgAlt="Hide and Seek Otter"
                        mediaLeft
                    >
                        <h3>Enhydra is Curious</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut posuere odio. In hac habitasse platea dictumst. Nullam aliquam fringilla risus, et hendrerit sem congue ac. Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus.</p>                        
                    </MediaBlock>
                </div>

                <FlexGrid row>
                    <FlexGrid col size={12}>
                        <ArticleCard />
                    </FlexGrid>
                    <FlexGrid col size={12}>
                        <ArticleCard />
                    </FlexGrid>
                    <FlexGrid col size={12}>
                        <ArticleCard />
                    </FlexGrid>
                </FlexGrid>

                <div>
                    <button className="btn">Learn More</button>
                </div>

            </div>
        )
    }
};

export default connect(mapStateToProps)(HomePage);

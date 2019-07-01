import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';

// CONTENT IMPORTS
import ArticleCard from '../../content/ArticleCard/ArticleCard';
import FlexGrid from '../FlexGrid/FlexGrid';
import MediaBlock from '../MediaBlock/MediaBlock';
import HeroCallout from '../HeroCallout/HeroCallout';

class HomePage extends Component {
    render() {
        return(
            <div>
                <HeroCallout>
                </HeroCallout>

                <div className="container">
                    <MediaBlock
                        imgSrc="/images/otter-chill.jpg"
                        imgAlt="Relaxing Otter"
                        mediaRight
                    >
                        <h3>Enhydra is Chill</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
                            Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus.&nbsp;
                            Vestibulum ut posuere odio. In hac habitasse platea dictumst.&nbsp;
                            Nullam aliquam fringilla risus, et hendrerit sem congue ac.&nbsp;
                            Morbi non ante maximus, pharetra metus et, pretium risus.
                        </p>
                    </MediaBlock>
                </div>

                <div className="container">
                    <MediaBlock
                        imgSrc="/images/otter-hide-and-seek.jpg"
                        imgAlt="Hide and Seek Otter"
                        mediaLeft
                    >
                        <h3>Enhydra is Curious</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;
                            Vestibulum ut posuere odio. In hac habitasse platea dictumst.&nbsp;
                            Nullam aliquam fringilla risus, et hendrerit sem congue ac.&nbsp;
                            Maecenas erat nisl, dictum a mi eget, sollicitudin sodales purus.
                        </p>                        
                    </MediaBlock>
                </div>

                <div className="container">
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
                </div>

                <div>
                    <button className="btn">Learn More</button>
                </div>

            </div>
        )
    }
};

export default connect(mapStateToProps)(HomePage);

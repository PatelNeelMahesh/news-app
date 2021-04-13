import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore}) => {
    return (
        <Container maxWidth="md">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <img height="80%" src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="app store"/>
                    <img height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="play store"/>
                </div>
            
                {
                    newsArray.map((newsItem) => (
                        <NewsCard newsItem = {newsItem} key={newsItem.title}/>
                    ))
                } 

                {
                    loadMore <= newsResults && (
                        <>
                            <hr/>
                            <button className="loadMore" onClick={() => setLoadMore(loadMore+20)}>Load More</button>
                        </>
                    )                
                }                              

            </div>
        </Container>
    )
}

export default NewsContent

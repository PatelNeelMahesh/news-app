import React from 'react'
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
    
    // console.log(newsItem);

    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");

    // console.log(date);
    
    const hour = parseInt(date[4].substring(0,2));
    const time = hour>12 ? true : false;

    return (
        <div className="newsCard">

            <img 
                alt={newsItem.title} 
                src={
                    newsItem.urlToImage
                        ?newsItem.urlToImage
                        :"https://img.freepik.com/free-vector/red-yellow-news-business-company-logo_23-2148462311.jpg?size=626&ext=jpg&ga=GA1.2.1614264220.1616976000"
                    } 
                className="newsImage"
            />

            <div className="newsText">
                <div>
                    <span className="title">
                        {newsItem.title}
                    </span>
                    <br /> {" "}
                    <span className="author">

                        <a href={newsItem.url} target="__blank">
                            <b>short </b>
                        </a>

                        <span className="muted">
                            by {newsItem.author ? newsItem.author : "unknown"} / {" "}
                            {
                                time
                                ? `${hour-12}:${date[4].substring(3,5)} pm`
                                : `${hour}:${date[4].substring(3,5)} am `
                            } {" "}
                            on {date[2]} {date[1]} {date[3]}, {date[0]}
                                      
                        </span>
                        
                    </span>

                    <div className="lowerNewsText">
                        <div className="description">
                            {newsItem.description}
                            <span className="readmore">
                                <br/>read more at {" "}
                                <a href={newsItem.url} target="__blank">
                                    <b>{newsItem.source.name}</b>
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default NewsCard

import React, { useState } from 'react';
import moment from 'moment';
import './templay.css';
import Proptypes from 'prop-types';
import missedArticles from './missed-articles.json';

function MissedTemplay() {
  const [bookmarked, setBookmarked] = useState(false);

  const bookmarkClick = () => setBookmarked(!bookmarked);
    return (
      <div className="missed-card-container">
        {missedArticles.map((article, index) => (
        <a href={article.link} style={{ textDecoration: 'none' }}>
          <div className="cardd">
            <div className="card-top">
              <img
                id="articlePic"
                src={article.image}
                alt={article.description}
              />
            </div>
            <div className="card-bottom" style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 id="articleTitle">{article.title}</h2>
              <p id="articleDescription">{article.description}</p>
              <p id="authorName">{article.author.name}</p>
              <img
                id="authorPic"
                className="circle-border"
                src={article.author.image}
                alt={"image of " + article.author.name}
              />
            <p>{moment(article.postedDate).format("MMM DD YYYY")} | {article.minutesToRead} minute read</p>
              
            <div onClick={bookmarkClick}>
              {bookmarked ? (
                <img id="bookmarkLogo"
                  src={"blog-homepage/src/selectedBookmark.png"}
                  alt="Bookmark selected"
                />
              ) : (
                <img id="bookmarkLogo"
                  src={"blog-homepage/src/emptyBookmark.png"}
                  alt="Bookmark not selected"
                />
              )}
            </div>
          </div>
        </div>
      </a>
        ))}
      </div>
    );
  }
  
  

MissedTemplay.propTypes = {
  title: Proptypes.string.isRequired, // "title"
  description: Proptypes.string.isRequired, // "description"
  image: Proptypes.string.isRequired, // "image"
  link: Proptypes.string.isRequired, // "link"
  author: Proptypes.shape({ // "author": {
    name: Proptypes.string.isRequired, //     "name":
    image: Proptypes.string.isRequired, //     "image":
    isMediumMember: Proptypes.bool.isRequired //     "isMediumMember":
  }),
  postedDate: Proptypes.string.isRequired, // "postedDate":
  minutesToRead: Proptypes.number.isRequired, // "minutesToRead":
  hasAudioAvailable: Proptypes.bool.isRequired, // "hasAudioAvailable":
  memberPreview: Proptypes.bool.isRequired // "memberPreview":
}

export default MissedTemplay;

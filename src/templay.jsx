
import React, { useState } from 'react';
import moment from 'moment';
import './templay.css';
import PropTypes from 'prop-types';
import yourArticles from './your-articles.json';


function Templay() {
  const [bookmarked, setBookmarked] = useState(false);

  const bookmarkClick = () => setBookmarked(!bookmarked);

  return (
    <div className="card-container">
      {yourArticles.map((article, index) => (
        <a href={article.link} style={{ textDecoration: 'none' }}>
        <div className="card">
          
          <div className="card-left">
            <img
              id="articlePic"
              src={article.image}
              alt={article.description}
            />
          </div>
          
          <div className="card-right" style={{ display: 'flex', flexDirection: 'column' }}>
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

Templay.propTypes = {
  title: PropTypes.string.isRequired, // "title"
  description: PropTypes.string.isRequired, // "description"
  image: PropTypes.string.isRequired, // "image"
  link: PropTypes.string.isRequired, // "link"
  author: PropTypes.shape({ // "author": {
    name: PropTypes.string.isRequired, //     "name":
    image: PropTypes.string.isRequired, //     "image":
    isMediumMember: PropTypes.bool.isRequired //     "isMediumMember":
  }),
  postedDate: PropTypes.string.isRequired, // "postedDate":
  minutesToRead: PropTypes.number.isRequired, // "minutesToRead":
  hasAudioAvailable: PropTypes.bool.isRequired, // "hasAudioAvailable":
  memberPreview: PropTypes.bool.isRequired // "memberPreview":
};

export default Templay;

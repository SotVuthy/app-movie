import React from "react";
import '../Card/Card.scss'
import { Link } from "react-router-dom";

function BasicExample(movie) {
  console.log(movie.info);
  const img_path='https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div className="cardd">
        <div class="movie_card" id="bright">
          <div class="info_section">
            <div class="movie_header">
              <img
                className="smallimg"
                src={img_path+movie.info.poster_path}
                alt="image1"
              />
              <h4 className="title-mo">{movie.info.title}</h4>
              <p className="movie-des">{movie.info.release_date}</p>
              <span className="Rating">Rating {movie.info.vote_average}</span>
              <p className="type">Adventure, Action, Fantasy</p>
            </div>
            <div class="movie_desc">
              <p class="text">{movie.info.overview}</p>
            </div>
            <div className="interact">
              <button className="btnwatch">
                {/* <a className="watch-link" href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch now
                </a> */}
              <Link to='/Watchpage' className="watch-link">Watch Now</Link>

              </button>
            </div>
          </div>
          <div className="blur_back bright_back">
            <img
              src={img_path+movie.info.backdrop_path}
              alt="/"
            />
          </div>
        </div>
      </div> 
    </>
  );
}

export default BasicExample;



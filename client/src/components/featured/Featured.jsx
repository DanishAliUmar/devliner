import React from "react";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" className="" />
              <input
                type="text"
                placeholder='Try "build mobil app"'
                className=""
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>Ai Services</button>
          </div>
        </div>
        <div className="right">
            <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;

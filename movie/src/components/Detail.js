import React from "react";

function Detail({ selected, closeDetail }) {
  return (
    <section className="detail">
      <div className="content">

        <div className="img">
          <img src={selected.Poster} alt="" />
        </div>

        <div className="about">
          <h2>{selected.Title}</h2>
          <span>{selected.Year}</span>
          <p className="rating">Rating: {selected.imdbRating}</p>
          <p>{selected.Plot}</p>
          <button className="close" onClick={closeDetail}>
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default Detail;

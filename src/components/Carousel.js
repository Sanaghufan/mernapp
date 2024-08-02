import React from "react";

export const Carousel = () => {
  return (
    <div>
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: "10" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-white bg-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            src="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(30%" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://th.bing.com/th/id/OIP.ki6YHfXjOnZ9prvHdaqiVQHaFR?rs=1&pid=ImgDetMain"
            className="d-block w-100"
            style={{ filter: "brightness(30%" }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(30%" }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>  );
};

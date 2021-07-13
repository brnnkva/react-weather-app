import React from "react";
import "./SearchForm.css";

export default function SearchForm(){
    return (
<div className="SearchForm">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="enter city"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary shadow-sm"
              value="Submit"
            />
          </div>
          <div className="col-2">
            <button
              type="click"
              className="btn btn-primary findCurrent-button"
              id="current-location-button"
            >
              <div className="locationMarker">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
    );
}
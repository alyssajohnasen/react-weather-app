import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div className="form-row align-items-center">
          <div className="col-10">
            <input
              type="text"
              className="form-control form-control-sm shadow-sm border-0"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-1">
            <button
              type="submit"
              className=" form-control-sm btn btn-sm btn-light shadow-sm border-0 searchIcon"
            >
              <i className="fas fa-search search-icon" />
            </button>
          </div>
          <div className="col-1">
            <button type="button" className="btn btn-sm btn-light shadow-sm">
              <i className="fas fa-map-marker-alt" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

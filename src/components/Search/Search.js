import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.scss";
const Search = () => {
    return (
        <div className="SearchContainer">
            <BsSearch className="search_icon" />
            <input className="search" />
        </div>
    );
};

export default Search;

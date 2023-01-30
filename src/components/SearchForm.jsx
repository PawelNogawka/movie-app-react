import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import "./SearchForm.scss";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchValueTrimmed = searchValue.trim();
    const encodedSearchValue = encodeURIComponent(searchValueTrimmed);
    navigate(`/search/${encodedSearchValue}`);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Search..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-form__btn">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default SearchForm;

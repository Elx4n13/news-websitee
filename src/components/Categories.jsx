import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Categories.scss";
const Categories = ({ changeCategory, searchParams }) => {
  const para = searchParams.get("categories");
  const classButton = para === null ? "all" : para;
  const handleChange = (e) => {
    changeCategory(e.target.innerText);
  };
  const buttons = [
    "All",
    "Business",
    "Sports",
    "World",
    "Technology",
    "Entertainment",
    "Science",
  ];
  return (
    <div className="categoriesDiv">
      {buttons.map((name) => (
        <NavLink
          to={`/?categories=${name.toLowerCase()}`}
            key={name}
            onClick={handleChange}
          >
          <button
            className={
              classButton === name.toLowerCase() ? "activeButton" : null
            }
          >
            {name}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

import React from "react";

import "./CategoryItem.scss";

const CategoryItem = ({ name, selectedCategory, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory(name);
  };

  const itemClasses =
    selectedCategory === name
      ? "category-item category-item--active"
      : "category-item";

  return (
    <button className={itemClasses} onClick={handleClick}>
      {name}
    </button>
  );
};

export default CategoryItem;

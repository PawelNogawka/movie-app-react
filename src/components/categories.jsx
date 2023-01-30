import React from "react";

import { categoriesList } from "../utils/categoriesList";

import CategoryItem from "./CategoryItem";

import "./Categories.scss";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="categories">
      {categoriesList.map((item) => (
        <CategoryItem
          key={item.name}
          name={item.name}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
};

export default Categories;

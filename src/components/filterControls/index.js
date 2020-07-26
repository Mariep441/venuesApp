import React, { useContext } from "react";
import "./filterControls.css";
import { CategoriesContext } from '../../contexts/categoriesContext' 


const FilterControls = props => {
  const context = useContext(CategoriesContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleCategoryChange = e => {
    handleChange(e, "category", e.target.value);
  };

  const handleSubCategoryChange = e => {
    handleChange(e, "subCategory", e.target.value);
  };

 
  return (
    <div className="row bg-secondary">
      <div className="col-md-15">
        <h5>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span>Category:</span>
          <select id="category" onChange={handleCategoryChange}>
            {context.categories.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>

          <span>SubCategory:</span>
          <select id="subCategory" onChange={handleSubCategoryChange}>
            {context.categories.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </h5>
      </div>
    </div>
  );
};

export default FilterControls;
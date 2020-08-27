import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import "./search.css";
import "../../images/travel.png";
import { CategoriesContext } from '../../contexts/categoriesContext';
import {locations} from '../../assets/data';
import { Link } from "react-router-dom";


const Search = () => {
  const context = useContext(CategoriesContext);
  
  const [category,setCategory]=useState('');
  const handleSearch=(e)=>{
    console.log(category);
    setCategory(e)
  }


  return (
    <div className="header-form-input-col">
    
    <div className="image">
      <img src={require('../../images/travel.png')} height="700" width="1200" />
    </div>

    <div className="header-form-input-col">
    <div className="header-form-input-col">
      <h5>

        <span>Location:</span>
        <select id="location" >
          {locations.map(location => {
            return (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            );
          })}
        </select>
 


        <span>Category:</span>
        <select id="category" >
          {context.categories.map(category => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        

        <span>Let's Go!</span>
        <Link  to={{pathname:"/list"}}>
          <button type="button" className="btn w-40 btn-primary"
          onClick={handleSearch} 
          >
            Search
          </button>
        </Link>
        </h5>
      </div>
    </div>
  </div>
  );
};
export default Search;
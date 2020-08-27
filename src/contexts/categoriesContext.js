import React, { useState, useEffect, createContext } from "react";
import { getCategories } from "../api/foursquare-api";
import { getSubCategories } from "../api/foursquare-api";

export const CategoriesContext = createContext(null)

const CategoriesContextProvider = props => {
    
  const [categories, setCategories] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
      getCategories().then(allCategories => {
        setCategories([categories[0], ...allCategories]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  const [subCategories, setSubCategories] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
      getSubCategories().then(allSubCategories => {
        setSubCategories([subCategories[0], ...allSubCategories]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <CategoriesContext.Provider
          value={{
            categories,
            subCategories
          }}
        >
          {props.children}
        </CategoriesContext.Provider>    
    )
}


export default CategoriesContextProvider;
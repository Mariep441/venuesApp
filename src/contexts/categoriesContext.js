import React, { useState, useEffect, createContext } from "react";
import { getCategories } from "../api/foursquare-api";

export const CategoriesContext = createContext(null)

const CategoriesContextProvider = props => {
    const [categories, setCategories] = useState([{ id: "0", name: "All"}]);
    useEffect(() => {
      getCategories().then(allCategories => {
        setCategories([categories[0], ...allCategories]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CategoriesContext.Provider
          value={{
            categories
          }}
        >
          {props.children}
        </CategoriesContext.Provider>    
    )
}

export default CategoriesContextProvider;
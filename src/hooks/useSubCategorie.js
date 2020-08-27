import { useEffect, useState } from "react";
import {getCategories} from '../api/foursquare-api'

const useSubCategory = id => {
  const [subCategory, setSubCategory] = useState(null);
  useEffect(() => {
    getCategories(id).then(subCategory => {
        setSubCategory(subCategory);
    });
  }, [id]);
  return [subCategory, setSubCategory];
};

export default useSubCategory
import { createContext,useState,useEffect } from "react";
import { getCategoriesDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap:{},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap,setCategoriesMap] = useState({});
  useEffect(()=>{
    const getCategoriesMap = async ()=>{
      const categoryMap = await getCategoriesDocuments();
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap();
  },[])
  const value = {categoriesMap,setCategoriesMap}
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
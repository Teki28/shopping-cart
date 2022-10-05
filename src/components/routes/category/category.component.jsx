import {CategoryContainer,CategoryTitle} from './category.styles.jsx'
import { useParams } from 'react-router-dom'
import {useState,useEffect, Fragment } from 'react';
import ProductCard from '../../product-card/product-card.component';
import { selectCategoriesMap,selectCategoriesIsLoading } from '../../../store/categories/category.selector.js';
import { useSelector } from 'react-redux';
import Spinner from '../../spinner/spinner.component.jsx';
const Category = ()=>{
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products,setProducts] = useState(categoriesMap[category]);
  useEffect(()=>{
    setProducts(categoriesMap[category])
  },[category,categoriesMap])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? <Spinner /> : 
            <CategoryContainer>
      
            { products &&
              products.map((product)=><ProductCard key={product.id} product={product} />)
            }
            </CategoryContainer>
      }

    </Fragment>
  )

}

export default Category
import React, { useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DesriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
<Breadcrum product= {Product} />
<ProductDisplay product ={Product} />
<DescriptionBox />
<RelatedProduct />
    </div>
  )
}

export default Product
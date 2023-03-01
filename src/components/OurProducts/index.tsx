import { ProductCard } from '../ProductCard'
import { TitleText } from '../Typography'
import { ProducctList, OurProductsContainer } from './styles'
import { useState, useEffect } from 'react'


export function OurProducts(){

   const [productList, setProductList] = useState([])

   useEffect(()=>{
      fetch('https://dummyjson.com/products/')
      .then((res) => res.json())
      .then((json) => {
         setProductList(json);
      })
      .catch((error)=>{
         console.error('Error fetching products:', error)
      })
   },[])

   console.log('=>Product List',productList)


   return(
      <OurProductsContainer className='container'>
         <TitleText size='1' color='subtitle'>
            Our Products
         </TitleText>

         <ProducctList>


         </ProducctList>

      </OurProductsContainer>
   )
}
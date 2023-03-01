import React from 'react'
import { useState } from 'react'
import {QuantityInput} from '../QuantityInput'
import { RegularText, TitleText } from '../Typography'
import {useCart} from '../../hooks/useCart'


export interface Product {

   id: number
   title: string
   description: string
   image: string
   price: number
}


interface ProductProps {

   product: Product
}




export function ProductCard({product}:ProductProps) {

const {addProductToCart} = useCart()

const [quantity, setQuantity] = useState(1)

   function handleIncrease() {

      setQuantity((state)=> state + 1)
   }

   function handleDecrease() {

      setQuantity((state)=> state - 1)
   }

   function handleAddToCart(){
      const productToAdd = {
         ...product,
         quantity,
      }
      addProductToCart(productToAdd)

      setQuantity(1)
   }

   const formattedPrice = Product.price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })


    return(
      <ProductCardContainer>

         <Name>
            {product.description}
         </Name>

         <Description>
            {product.description}
         </Description>

         <CardFooter>
            <div>
               <RegularText>

               </RegularText>
               <TitleText>
                  {formattedPrice}
               </TitleText>
            </div>
               <AddCartWraper>

                  <QuantityInput 
                     onIncrease={handleIncrease}
                     onDecrease={handleDecrease}
                     quantity={quantity}
                     />
                     
                     <button
                     onClick={handleAddToCart}
                     >
                        <ShoppingCart/>
                     </button>
               </AddCartWraper>
            
         </CardFooter>
      </ProductCardContainer>
    )

}


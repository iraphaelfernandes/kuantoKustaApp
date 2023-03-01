import React from 'react'
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

}


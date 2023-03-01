import {createContext, ReactNode, useState, useEffect} from 'react'
import {Product} from '../components/ProductCard'
import {produce} from 'immer'

export interface CartItem extends Product {

  quantity: number
}

interface CartContextType {

  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number

  addProductToCart: (product: CartItem)=> void

  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void

  removeCartItem: (cartItemId: number) => void

  cleanCart: () => void
  
}

interface CartContextProviderProps {
  children: ReactNode
}

const PRODUCT_ITEMS_STORAGE_KEY = 'ProductDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps){

  const [cartItems, setCartItems] = useState<CartItem[]>(()=>{
    const storedCartItems = localStorage.getItem(PRODUCT_ITEMS_STORAGE_KEY)
    if(storedCartItems){
      return JSON.parse(storedCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem)=>{
    return total + (cartItems.price ) * (cartItems.quantity)
  }, 0) 

  function addProductToCart(product: CartItem) {

    const productAlreadExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    )
    const newCart = produce(cartItems, (draft)=>{
      if(productAlreadExistsInCart < 0) {
        draft.push(product)
      }else{
        draft[productAlreadExistsInCart].quantity += product.quantity
      }
    })

    setCartItems(newCart)

  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ){
    const newCart = produce(cartItems, (draft)=>{
      const productExistsInCart = cartItems.findIndex(
        (cartItems) => cartItemId.id === cartItemId,
      )
      if(productExistsInCart >= 0) {
        const item = draft[productExistsInCart]
        item.quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {

    const newCart = produce(cartItems, (draft)=>{
      const productExisitsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemsId,
      )
      if(productExisitsInCart >= 0) {
        draft.splice(productExisitsInCart, 1)
      }
    })
    setCartItems(newCart)
  }


  function cleanCart(){
    setCartItems([])
  }

  useEffect( () => {
    localStorage.setItem(PRODUCT_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }
    ,[cartItems])

    return (
      <CartContext.Provider
      value={{
        cartItems,
        addProductToCart,
        cartQuantity,
        cartItemsTotal,
        cleanCart,
        removeCartItem,
        changeCartItemQuantity
      }}
      >
      {children}
      </CartContext.Provider>
    )
//--------------------------------------
}
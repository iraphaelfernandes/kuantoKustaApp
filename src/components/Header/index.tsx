import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import {MapPin, ShoppingCart} from 'phosphor-react'


import productLogoImage from '../../assets/product-delivery-logo.svg'

import {NavLink} from 'react-router-dom'
import {useCart} from '../../hooks/useCart'


export function Header() {

   const {cartQuantity} = useCart()

   return (

      <HeaderContainer>
         <div>
            <NavLink to='/'>
               <img src={productLogoImage} alt=""/>
            </NavLink>

            <HeaderButtonsContainer>

               <HeaderButton>
                  <MapPin size={23} weight='fill'/>
                  Your Location
               </HeaderButton>

               <NavLink to='/completeOrder'>
                  <HeaderButton>
                     {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                     <ShoppingCart size={20} weight="fill"/>
                  </HeaderButton>
               </NavLink>
               
            </HeaderButtonsContainer>
         </div>
      </HeaderContainer>
   )

}






















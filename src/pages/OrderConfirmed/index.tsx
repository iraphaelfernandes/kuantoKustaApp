import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {

  state:OrderData
}

export function OrderConfirmedPage() {

  const {colors} = useTheme()
  const {state} = useLocation() as LocationType
  const navigate = useNavigate()

  useEffect(()=>{
    if(!state) {
      navigate('/')
    }
  }
    , [])

    if(!state){
      return <></>
    }

    return (
      <OrderConfirmedContainer className="container">
        <div>
          <TitleText size="l">Uhu! Pedido confirmado</TitleText>
          <RegularText size="l" color="subtitle">
          Now just wait for the product to come to you soon!
          </RegularText>
        </div>  
      </OrderConfirmedContainer>
    )
}


















import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ActionsContainer,
  ProductCartCardContainer,
  RemoveButton,
} from './styles'

interface ProductCartCardProps {
  product: CartItem
}


export function ProductCartCard({product}: ProductCartCardProps){

  const {changeCartItemQuantity, removeCartItem} = useCart()

  function handleIncrease() {

    changeCartItemQuantity(product.id, 'increase')
  }

  function handleDecrease() {

    changeCartItemQuantity(product.id, 'decrease')
  }

  function handleRemove() {

    removeCartItem(product.id)
  }

  const productTotal = product.price * product.quantity
  const formattedPrice = formatMoney(productTotal)

  return(

    <ProductCartCardContainer>
      <div>
        <img src={`/products/${product.image}`} alt='product'/>

        <div>
          <RegularText>{product.title}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size='small'
              quantity={product.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onclick={handleRemove}>
              <Trash size={15}/>
              Remove
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>$ {formattedPrice}</p>
    </ProductCartCardContainer>
  )
}




















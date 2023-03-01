import {Minus, Plus} from 'phosphor-react'

interface QuantityInputProps {

   size? : 'medium' | 'small'
   onIncrease: ()=> void
   onDecrease: ()=> void
   quantity: number
}

export function QuantityInput({
   size = 'medium',
   onIncrease,
   onDecrease,
   quantity
}: QuantityInputProps) {

   return(
      <QuantityInputContainer>
         <IconWrapper>

         </IconWrapper>
         <input type='number' readOnly value={quantity}/>
         <IconWrapper
         onClick={onIncrease}
         >
            <Plus size={17} weight='fill'/>
         </IconWrapper>
      </QuantityInputContainer>
   )
}
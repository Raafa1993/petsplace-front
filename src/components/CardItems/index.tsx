import React from 'react';
import { formatPrice } from '../../utils/format';
import { useCart } from '../../hooks/useCart';

import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { ContentItems, CardItem, Image, CardInfo, Buttons, Value } from './styles';

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  imageURL: string;
}

function CardItems() {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product, priceFormatted: formatPrice(product.price), subtotal: formatPrice(product.price * product.amount)
  }))
  const total =
    formatPrice(
      cartFormatted.reduce((sumTotal, product) => {
        sumTotal += product.price * product.amount

        return sumTotal
      }, 0)
    )

  function handleProductIncrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount + 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleProductDecrement(product: Product) {
    const IncrementArguments = {
      productId: product.id,
      amount: product.amount - 1
    }
    updateProductAmount(IncrementArguments)
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }
  return (
    <>
      {cartFormatted.map(product => (
        <ContentItems>

          <CardItem>
            <Image>
              <img src={product.imageURL} width={"85px"} alt="Foto illustrativa" />
            </Image>
            <CardInfo>
              <h1>{product.name}</h1>
              <span>{product.priceFormatted}</span>

              <div>
                <button
                  type="button"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                >
                  <MdRemoveCircleOutline size={25} />
                </button>
                <input
                  type="text"
                  readOnly
                  value={product.amount}
                />
                <button
                  type="button"
                  onClick={() => handleProductIncrement(product)}
                >
                  <MdAddCircleOutline size={25} />
                </button>
              </div>

            </CardInfo>

            <Value>
              <button
                type="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <MdDelete size={20} />
              </button>
              <span>{product.subtotal}</span>
            </Value>

          </CardItem>
        </ContentItems>
      ))}

    </>
  )
}

export default CardItems;

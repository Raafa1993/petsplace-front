import React, { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { Product } from '../utils/types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@Petsplace:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(product => product.id === productId)

      if (!productAlreadyInCart) {
        const { data: product } = await api.get<Product>(`api/products/${productId}`)

        setCart([...cart, { ...product, amount: 1 }])
        localStorage.setItem('@Petsplace:cart', JSON.stringify([...cart, { ...product, amount: 1 }]))
        toast('Adicionado')
        return;
      }

      if (productAlreadyInCart) {
        const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
          ...cartItem,
          amount: Number(cartItem.amount) + 1
        } : cartItem)

        setCart(updatedCart)
        localStorage.setItem('@Petsplace:cart', JSON.stringify(updatedCart))
        return;
      } else {
        toast.error('Quantidade solicitada fora de estoque')
      }

    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if (!productExists) {
        toast.error('Erro na remoção do produto');
        return
      }

      const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
      setCart(updatedCart)
      localStorage.setItem('@Petsplace:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount < 1) {
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if (!productExists) {
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
        ...cartItem,
        amount: amount
      } : cartItem)
      setCart(updatedCart)
      localStorage.setItem('@Petsplace:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

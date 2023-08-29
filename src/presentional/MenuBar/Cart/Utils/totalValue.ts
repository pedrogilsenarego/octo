import { config } from "../../../../config/config";
import { CartProduct } from "../../../../slicer/cart/cart.types";

export const getTotalValue = (cartProducts: CartProduct[]) => {
  let totalValue = 0;
  for (const cartProduct of cartProducts) {
    totalValue +=
      cartProduct.product.price *
      (cartProduct.product.discount && config.discounts
        ? 1 - cartProduct.product.discount
        : 1) *
      cartProduct.value;
  }
  return totalValue;
};

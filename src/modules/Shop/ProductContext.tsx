import { createContext, useState } from "react";

interface ProductContextType {
  product: number;
  setProduct: (value: number) => void;
  fabric: number;
  setFabric: (value: number) => void;
}

export const ProductContext = createContext<ProductContextType>({
  product: 0,
  setProduct: () => { },
  fabric: 0,
  setFabric: () => { },
});

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<number>(0);
  const [fabric, setFabric] = useState<number>(0);

  const contextValue: ProductContextType = {
    product,
    setProduct,
    fabric,
    setFabric
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

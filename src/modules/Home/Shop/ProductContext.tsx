import { createContext, useState } from "react";

interface ProductContextType {
  product: string;
  setProduct: (value: string) => void;
  fabric: string;
  setFabric: (value: string) => void;
}

export const ProductContext = createContext<ProductContextType>({
  product: "",
  setProduct: () => { },
  fabric: "",
  setFabric: () => { },
});

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<string>("0");
  const [fabric, setFabric] = useState<string>("0");

  const contextValue: ProductContextType = {
    product,
    setProduct,
    fabric,
    setFabric
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

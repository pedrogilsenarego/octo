import { createContext, useState, Dispatch, SetStateAction } from "react";
import { Product } from "../../../constants/category";

interface ProductContextType {
  product: number;
  setProduct: (value: number) => void;
  fabric: number;
  setFabric: (value: number) => void;
  selectedProducts: Product[] | []
  setSelectedProducts: Dispatch<SetStateAction<Product[] | []>>;
}

export const ProductContext = createContext<ProductContextType>({
  product: 0,
  setProduct: () => { },
  fabric: 0,
  setFabric: () => { },
  selectedProducts: [],
  setSelectedProducts: () => { }
});

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<number>(0);
  const [fabric, setFabric] = useState<number>(0);
  const [selectedProducts, setSelectedProducts] = useState<Product[] | []>([])

  const contextValue: ProductContextType = {
    product,
    setProduct,
    fabric,
    setFabric,
    selectedProducts,
    setSelectedProducts
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

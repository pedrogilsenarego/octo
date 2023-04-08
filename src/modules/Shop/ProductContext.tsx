import { createContext, useState } from "react";
import { Product } from "../../constants/category";

interface ProductContextType {
  product: number | null;
  setProduct: (value: number | null) => void;
  fabric: number | null;
  setFabric: (value: number | null) => void;
  infoPopup: boolean
  setInfoPopup: (value: boolean) => void
  selectedFabrics: Product[];
  setSelectedFabrics: (selectedFabrics: Product[]) => void
}

export const ProductContext = createContext<ProductContextType>({
  product: 0,
  setProduct: () => { },
  fabric: null,
  setFabric: () => { },
  infoPopup: false,
  setInfoPopup: (value) => { },
  selectedFabrics: [],
  setSelectedFabrics: (value) => { },
});

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<number | null>(0);
  const [fabric, setFabric] = useState<number | null>(null);
  const [infoPopup, setInfoPopup] = useState<boolean>(false);
  const [selectedFabrics, setSelectedFabrics] = useState<Product[]>([]);

  const contextValue: ProductContextType = {
    product,
    setProduct,
    fabric,
    setFabric,
    infoPopup,
    setInfoPopup,
    selectedFabrics,
    setSelectedFabrics
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

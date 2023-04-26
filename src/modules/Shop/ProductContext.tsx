import { createContext, useEffect, useState } from "react";
import { Product } from "../../constants/category";
import { fetchProducts } from "../../services/shop/services";
import { useQuery } from "react-query";

interface ProductContextType {
  category: string | null;
  setCategory: (value: string | null) => void;
  pattern: string | null;
  setPattern: (value: string | null) => void;
  infoPopup: boolean
  setInfoPopup: (value: boolean) => void
  selectedFabrics: Product[];
  setSelectedFabrics: (selectedFabrics: Product[]) => void
  products: [] | Product[]
  isLoading: boolean

}

export const ProductContext = createContext<ProductContextType>({
  category: null,
  setCategory: () => { },
  pattern: null,
  setPattern: () => { },
  infoPopup: false,
  setInfoPopup: (value) => { },
  selectedFabrics: [],
  setSelectedFabrics: (value) => { },
  products: [],
  isLoading: true

});

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<string | null>(null);
  const [pattern, setPattern] = useState<string | null>(null);
  const [infoPopup, setInfoPopup] = useState<boolean>(false);
  const [selectedFabrics, setSelectedFabrics] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    setSelectedFabrics([])
  }, [category, pattern])


  const { isLoading, error, data: productsQuery } = useQuery('products', fetchProducts, {
    staleTime: 3600000, // 1 hour in milliseconds
  })

  useEffect(() => {
    if (!isLoading) setCategory("Sleeping Bag")
  }, [isLoading])

  useEffect(() => {

    setProducts(productsQuery?.data)
  }, [productsQuery])

  const contextValue: ProductContextType = {
    category,
    setCategory,
    pattern,
    setPattern,
    infoPopup,
    setInfoPopup,
    selectedFabrics,
    setSelectedFabrics,
    products,
    isLoading

  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

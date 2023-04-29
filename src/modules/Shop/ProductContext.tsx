import { createContext, useEffect, useState } from "react";
import { Product } from "../../constants/category";
import { fetchProducts } from "../../services/shop/services";
import { useQuery } from "react-query";
import useDebounce from "../../hooks/useDebounce";
import { useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { fabricsX } from "../../constants/fabrics";
import { productsMapper } from "./productsQueryMapper";


interface ProductContextType {
  category: string | null;
  setCategory: (value: string | null) => void;
  pattern: string | null;
  setPattern: (value: string | null) => void;
  infoPopup: boolean
  setInfoPopup: (value: boolean) => void

  products: [] | Product[]
  isLoading: boolean
  product: Product | null;
  setProduct: (product: Product | null) => void
  productSelected: number
  setProductSelected: (productSelected: number) => void
  vertical: boolean

}


export const ProductContext = createContext<ProductContextType>({
  category: null,
  setCategory: () => { },
  pattern: null,
  setPattern: () => { },
  infoPopup: false,
  setInfoPopup: (value) => { },

  products: [],
  isLoading: true,
  product: null,
  setProduct: () => { },
  productSelected: 0,
  setProductSelected: () => { },
  vertical: false,

},


);

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<string | null>("Sleeping Bag");
  const [pattern, setPattern] = useState<string | null>(null);
  const [infoPopup, setInfoPopup] = useState<boolean>(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null)
  const [productSelected, setProductSelected] = useState<number>(0);


  const filter = useDebounce((category ? category : pattern || "sleeping Bag"), 500)
  const typeFilter = useDebounce((category ? "category" : "pattern" || "category"), 500)
  const vertical = useSelector<State, boolean>((state) => state.general.positionVertical)
  const { isLoading, error, data: productsQuery, } = useQuery(['products', { filter, typeFilter }], fetchProducts, {
    staleTime: 3600000, // 1 hour in milliseconds
    cacheTime: 3600000, // 10 minutes in milliseconds
  })

  useEffect(() => {
    setProductSelected(0)
  }, [category, pattern])




  useEffect(() => {
    if (productsQuery?.data && productsQuery.data !== products) {

      const mappedProducts = productsMapper(productsQuery.data, typeFilter, filter)
      console.log(mappedProducts)
      setProducts(mappedProducts);
      setProduct(mappedProducts[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsQuery])





  const contextValue: ProductContextType = {
    category,
    setCategory,
    pattern,
    setPattern,
    infoPopup,
    setInfoPopup,

    products,
    isLoading,
    product,
    setProduct,
    productSelected,
    setProductSelected,
    vertical,

  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

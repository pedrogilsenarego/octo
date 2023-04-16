const productTypes = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  SET_PRODUCTS: "SET_PRODUCTS",
  FETCH_PRODUCT: "FETCH_PRODUCT",
  SET_PRODUCT: "SET_PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT:"DELETE_STORY",
  UPDATE_PROGRESS:"UPDATE_PROGRESS",
 
 
};

export interface ProductsState {
  products: {
    data: Product[];
  };
  Product: Product;
  carroussell: string[];
  progress:number
}

export interface Products {
  products: {
    data: Product[];
  };
}

export interface Product {
  documentID: string;
  coverPage: string;
  title: string;
  titleEN: string;
  

}

export default productTypes;

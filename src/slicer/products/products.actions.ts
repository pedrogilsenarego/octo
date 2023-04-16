import productsTypes, { Products, Product } from "./products.types"

export interface Filters {

  onlyActive?:boolean
}

export const fetchProducts = (filters?:Filters) => ({
  type: productsTypes.FETCH_PRODUCTS,
  payload: filters || {}
})

export const setProducts = (products:Products) => ({
  type: productsTypes.SET_PRODUCTS,
  payload: products,
});

export const fetchProduct = (documentID:string | undefined) => ({
  type: productsTypes.FETCH_PRODUCT,
  payload: documentID
})

export const setProduct = (product:Product) => ({
  type: productsTypes.SET_PRODUCT,
  payload: product,
});

export const addProduct = (product:any) => ({
  type: productsTypes.ADD_PRODUCT,
  payload: product,
});

//


export interface DeleteProps {
documentID:string
title:string
}

export const deleteProduct = (payload:DeleteProps) => ({
  type: productsTypes.DELETE_PRODUCT,
  payload: payload,
});

export const updateProgress = (payload:number) => ({
  type: productsTypes.UPDATE_PROGRESS,
  payload: payload,
});
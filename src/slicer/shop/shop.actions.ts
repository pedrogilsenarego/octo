import  shopTypes, { Filters } from "./shop.types";


export const updateFilters = (filters: Filters) => ({
  type: shopTypes.UPDATE_SHOP_FILTERS,
  payload: filters,
});


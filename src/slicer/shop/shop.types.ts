export const shopTypes = {
  UPDATE_SHOP_FILTERS:"UPDATE_SHOP_FILTERS"
  
};

export interface Filters {
  category: string;
  fabric: string[]
}
 

export interface ShopState {
  filters: Filters,
  
  

}





export default shopTypes;

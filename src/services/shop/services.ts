import { QueryFunction } from "react-query";
import { handleFetchProducts } from "./helpers"

interface Filters {
  filter?:string
  typeFilter?:"category" | "pattern" | undefined
}
export const fetchProducts: QueryFunction<any, [string, Filters]> = async ({ queryKey }) => {
  const [_, filters] = queryKey;
  try {
    console.log("fetching")
    const data:any = await handleFetchProducts(filters)
    return data
  }
  catch {

  }
  
}
import { handleFetchProducts } from "./helpers"

export const fetchProducts = async () =>{
  try {
    console.log("fetching")
    const data:any = await handleFetchProducts({})
    return data
  }
  catch {

  }
  
}
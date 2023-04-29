import { Product } from "../../constants/category";
import { fabricsX } from "../../constants/fabrics";

export const productsMapper = (products:Product[], typeFilter:"pattern"|"category", filter:string) => {
  const patternPriority: {
    [key: string]: string;
  } = {
    "Sleeping Bag": fabricsX[3],
    "Bed Bumper": fabricsX[0],
    "Bed Pocket": fabricsX[2],
    "Blanket": fabricsX[3],
    "Laundry Kit": fabricsX[3],
    "Pacifier Clip": "Octo's",
    "Bandana Bib": fabricsX[1],
    "Collar Bib": fabricsX[2],
  };

  const categoryPriority: {
    [key: string]: string;
  } = {
     "Vichy Powder Pink": "Bed Bumper",
     "Vichy Classic": "Bed Bumper",
     "Floral Powder Pink": "Pacifier Clip",
     "Floral Classic": "Stroller Pocket",
     "Octo's": "Blanket",
     "Pure White": "Collar Bib",
     "Waffle Stone": "Stroller Pocket",
     "Waffle Cream": "Bed Bumper",
    
  };
 
  const listToUse = typeFilter === "category" ? patternPriority : categoryPriority
  const patternOrCategory = typeFilter === "category" ? "pattern" : "category";

  
  

  const productsAvailableFiltered = () => {
    let finalOrder: Product[] = [];

    if (filter === null) {
      return products;
    }
    
    const matchingProduct = products.find(
      product => product[patternOrCategory] === listToUse[filter]
    );
    
    if (matchingProduct) {
      finalOrder.push(matchingProduct);
      
    }
    finalOrder.push(...products.filter(product => product !== matchingProduct));
    
    if (!finalOrder.length) {
      
      return products;
    }
    return finalOrder;
  };

  return productsAvailableFiltered()
}
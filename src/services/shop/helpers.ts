import { Product } from "../../constants/category";
import { firestore } from "../../firebase/utils";

interface Filters {
  filter?:string |null;
  typeFilter?:"category"|"pattern",
  persistProducts?: Product[] | [],
  pageSize?:number
}
export const handleFetchProducts = ({
  filter,
  typeFilter,
  persistProducts = [],
  pageSize = 10,
}:Filters) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection("products").limit(pageSize);
    if(filter && typeFilter) ref = ref.where(typeFilter, "==", filter);
    ref
      .get()
      .then((snapshot: any) => {
        const totalCount = snapshot.size;

        const data = [
          ...persistProducts,
          ...snapshot.docs.map((doc: any) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];
        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1,
        });
      })
      .catch((err: any) => {
        console.log(err)
        reject(err);
      });
  });
};
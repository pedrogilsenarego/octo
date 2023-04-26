import { firestore } from "../../firebase/utils";
export const handleAddProduct = (payload: any) => {

  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("products")
      .doc()
      .set(payload)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
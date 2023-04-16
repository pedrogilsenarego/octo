import { firestore } from "../../firebase/utils";

export const handleFetchProducts = ({
  persistProducts = [],
  pageSize = 6,
}) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection("products").limit(pageSize);

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
        reject(err);
      });
  });
};

export const handleFetchProduct = (documentID: string) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc(documentID)
      .get()
      .then((snapshot:any) => {
        if (snapshot.exists) {
          resolve(snapshot.data());
        }
      })
      .catch((err:any) => {
        reject(err);
      });
  });
};



export const handleAddProduct = (payload: any) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("products")
      .doc()
      .set(payload)
      .then(() => {
        resolve();
      })
      .catch((err:any) => {
        reject(err);
      });
  });
};

//


export const handleDeleteProduct = (documentID: string) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("products")
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((err:any) => {
        reject(err);
      });
  });
};



import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/dbConnection';
import { products } from '../mock/MockData'

export const importarProductos = () => {

    const productosCollection = collection(db, "productos");

    products.forEach((product) => {
        addDoc(productosCollection, product)
            .then((doc) => {
                console.log("Document written with ID: ", doc.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    });

}
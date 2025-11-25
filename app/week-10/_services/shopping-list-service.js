import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const itemsQuery = query(collection(db, "shoppingLists", userId, "items"));
    const querySnap = await getDocs(itemsQuery);
    const items = [];

    querySnap.forEach((doc) => {
        if (doc.exists()) items.push({id: doc.id, ...doc.data()});
    });
    return items;
}

export async function addItem(userId, item) {
    const add = await addDoc(collection(db, "shoppingLists", userId, "items"), item);
    return add.id;
}
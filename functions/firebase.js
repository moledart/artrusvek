import { db } from "../firebase-config";
import {
  collection,
  query,
  getDocs,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

export const getCollectionRef = (collectionName) => {
  return collection(db, collectionName);
};

export const getAllDocumentsFromCollection = async (
  collectionName,
  order,
  count
) => {
  const data = [];
  const ref = getCollectionRef(collectionName);
  const q = query(ref, orderBy(order, "asc"), limit(count));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
};

export const getDocumentFromCollection = async (collectionName, slug) => {
  const ref = collection(db, collectionName);
  const q = query(ref, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].data();
};

export const getDocumentsContainingSlug = async (
  collectionName,
  searchWhere,
  slug,
  order
) => {
  const data = [];
  const ref = collection(db, collectionName);
  const q = query(
    ref,
    orderBy(order, "asc"),
    where(searchWhere, "array-contains", slug)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
};

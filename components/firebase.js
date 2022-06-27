import { db } from '../firebase-config';
import {
  collection,
  query,
  onSnapshot,
  getDocs,
  orderBy,
  limit,
  where,
  getDoc,
} from 'firebase/firestore';

export const getDataFromFirebase = (collectionName) => {
  const q = query(collection(db, collectionName));
  const data = [];

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.forEach((doc) => data.push(doc.data()));
  });

  return data;
};

export const getAllDocumentsFromCollection = async (
  collectionName,
  order,
  count
) => {
  const data = [];
  const ref = collection(db, collectionName);
  const q = query(ref, orderBy(order, 'asc'), limit(count));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
};

export const getDocumentFromCollection = async (collectionName, slug) => {
  const ref = collection(db, collectionName);
  const q = query(ref, where('slug', '==', slug));
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
    orderBy(order, 'asc'),
    where(searchWhere, 'array-contains', slug)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
};

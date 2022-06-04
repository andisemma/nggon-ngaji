import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  runTransaction,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { firebaseApp } from './firebase';

import store from '../store/index';

const db = getFirestore(firebaseApp);

/**
 * Console Log
 * @param {string} judul
 * @param {*} data
 * @param {boolean} isJudul
 */
export function debug(judul, data, isJudul) {
  if (isJudul) {
    const style = 'color: red; font-size: 30px ';
    console.log('%c' + judul + '()', style);
  } else {
    console.log(judul + ' => ', data);
  }
}

/**
 * save to firestore with auto-generated ID
 * @param {string} colName Nama koleksi
 * @param {object
 * } data data
 * @returns doc id
 */
export async function setData(colName, data) {
  /* Loading */
  isLoading();
  let id = await addDoc(collection(db, colName), data);
  isLoading();
  return id.id;
}

/**
 * save to Firestore with custom ID
 * @param {string} colName
 * @param {string || integer} newId
 * @param {any} data
 * @returns doc id
 */
export async function fireSetDataWithId(colName, newId, data) {
  const sfDocRef = doc(db, colName, newId);
  debug('fireSetDataWithId', null, true);
  debug('colname', colName, false);
  debug('newId', newId, false);
  debug('data', data, false);
  try {
    const newPopulation = await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(sfDocRef);
      if (!sfDoc.exists()) {
        setDoc(sfDocRef, data);

        console.log('%cData berhasil disimpan', 'color:blue');

        return true;
      } else {
        console.log('%cData GAGAL disimpan', 'color:red');
        return false;
      }
    });

    return newPopulation;
  } catch (e) {
    console.error(e);
  }
}

/**
 * Get data from Firestore
 * @param {string} colName Collection name
 * @param {string} fieldName field name
 * @param {string} operator comparation operator eg.==, <= etc
 * @param {string} param parameter
 * @returns {Promise} data object
 */
export async function getData(colName, fieldName, operator, param) {
  isLoading();

  let data = [];
  let x = `select ${colName} where ${fieldName} ${operator} ${param}`;

  let q = query(collection(db, colName), where(fieldName, operator, param));
  let queryData = await getDocs(q);
  let index = 0;
  queryData.forEach((doc) => {
    index = index + 1;
    let merge = { ...{ uid: doc.id }, ...doc.data(), ...{ index: index } };
    data.push(merge);
  });

  isLoading();

  debug('Query', x, false);
  debug('getData', data, false);
  debug('From Store', store.getters.isLoading, false);

  /*  return data.length !== 0 ? data : []; */
  return data;
}

/**
 * get sigle data
 * @param {string} colName
 * @param {string} refName
 * @returns {Promise} data Object
 */
export async function getOnce(colName, refName) {
  const docRef = doc(db, colName, refName);
  const docSnap = await getDoc(docRef);

  debug('getOnce', `Select ${refName} from ${colName}`, false);
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    console.log('No such document!');
    return false;
  }
}

/**
 * @param {string} colName
 * @param {string} uid
 */
export async function del(colName, uId) {
  await deleteDoc(doc(db, colName, uId));
}

/**
 * Loading state setter
 */
function isLoading() {
  let loading = store.state.isLoading;
  store.commit('setState', ['isLoading', !loading, false]);
}

/**
 *
 * @param {any} data
 * @param {string} colName collection name
 * @param {string} refID document reference ID
 * @param {string} field field name
 * @returns Update State
 */
export async function updateData(data, colName, refId, field) {
  debug('update', `{field:${field},refid:${refId}, col:${colName}}`, false);
  const ref = doc(db, colName, refId);
  await updateDoc(ref, {
    [field]: data,
  });
}

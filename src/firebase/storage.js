import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { firebaseApp } from './firebase';

const storage = getStorage(firebaseApp);
/**
 *
 * @param {string} folderName assigned folder name
 * @param {string} fileName assigned file name
 * @param {string} ext file extensions
 * @param {string} file clientfile ref
 *
 */
export function resumableUpload(folderName, fileName, ext, file) {
  const storageRef = ref(storage, `${folderName}/${fileName}.${ext}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  /* let res = [];
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress =
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      res = { progress: progress };
      console.log(res);
    },
    (error) => {
      res = { error: error };
      console.log(res);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        res = { url: downloadURL };
        console.log(res);
      });
    }
  ); */

  return uploadTask;
}

/**
 *
 * @param {string} refs gsRefs
 * @returns donloadURL (string)
 */
export async function downloadURL(refs) {
  const url = await getDownloadURL(ref(storage, refs));
  return url;
}

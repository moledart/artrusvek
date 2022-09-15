import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { getDownloadURL, StorageReference, uploadString } from 'firebase/storage';

const getSlug = (text: string) => {
  const cyrillicToTranslit = CyrillicToTranslit();
  return cyrillicToTranslit.transform(text, '-').toLowerCase();
};

const addImageLinkToElement = async (element: any, ref: StorageReference, image: any) => {
  await uploadString(ref, image, 'data_url')
    .then(async () => {
      const downloadUrl = await getDownloadURL(ref);
      element.thumbnail = downloadUrl;
      return element;
    });
}

export default { getSlug, addImageLinkToElement };

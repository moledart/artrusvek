import {
  getDownloadURL,
  StorageReference,
  uploadString,
} from "firebase/storage";

const addImageLinkToElement = async (
  element: any,
  ref: StorageReference,
  image: any
) => {
  await uploadString(ref, image, "data_url").then(async () => {
    const downloadUrl = await getDownloadURL(ref);
    element.thumbnail = downloadUrl;
    return element;
  });
};

export default { addImageLinkToElement };

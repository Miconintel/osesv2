// "use server";

import { list } from "@vercel/blob";

export const getBlobImage = async function (imageIn) {
  async function allImages() {
    const blobs = await list();
    return blobs;
  }
  const blob = await allImages();
  const images = blob.blobs;

  // you can use this to get all the images , declaring the getImage function
  const getImage = (imageIn) => {
    const theImage = images.find((image) => image?.pathname === imageIn)?.url;
    return theImage;
  };
  // calling the getImage function with the image data passed
  const image = getImage(imageIn);
  return image;
};

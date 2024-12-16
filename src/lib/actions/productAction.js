"use server";

import { getBlobImage } from "../utilities/blob";
import { deleteBlob } from "../utilities/blob";
import { list } from "@vercel/blob";

//
export const productAction = async function (product, params) {
  const { coverImage } = product;
  const image = await getBlobImage(coverImage);
};

import { Product } from "../model/Product";
import { connectDb } from "../utilities/util";
// import { revalidatePath } from "next/cache";

export const getProducts = async () => {
  try {
    // db connect
    connectDb();
    //
    const product = await Product.find({});
    return product;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getProduct = async (slug) => {
  try {
    connectDb();
    const product = await Product.findOne({ _id: slug });
    return product;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

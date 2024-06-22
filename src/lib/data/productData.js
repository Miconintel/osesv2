import { Product } from "../model/Product";
import { connectDb } from "../utilities/util";
import { revalidatePath } from "next/cache";

export const getProducts = async () => {
  try {
    // db connect
    connectDb();
    //
    const product = await Product.find({});
    revalidatePath("/products");
    // console.log(product);
    return product;
  } catch (err) {
    console.log(err);
  }
};

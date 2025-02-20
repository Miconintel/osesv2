import { Product } from "../model/Product";
import { connectDb } from "../utilities/util";

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

export const deleteProduct = async (id) => {
  try {
    connectDb();
    const product = await Product.findByIdAndDelete(id);
    // console.log(product);
    // console.log("successful delete");
    return { message: "deleted successfully" };
  } catch (err) {
    console.log(err);
  }
};

import React from "react";
import styles from "./AdminPostsItem.module.css";
import { getBlobImage } from "@/lib/utilities/blob";
import { deleteProduct } from "@/lib/data/productData";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// const AdminPostsItem = ({ product }) => {
//   return (
//     <li className={styles.container}>
//       <div className={styles.description}>
//         <p className={styles.name}>{product.name}</p>
//         <p className={styles.price}>{product.price}</p>
//         <p className={styles.availability}>available</p>
//       </div>

//       <div className={styles.action}>
//         <button>Edit</button>
//         <button>delete</button>
//       </div>
//     </li>
//   );
// };

const AdminPostsItem = async ({ product }) => {
  const productAction = async function (product, params) {
    "use server";

    const { coverImage, id } = product;
    const image = await getBlobImage(coverImage);
    // delete blob
    del(image);

    // delete from data
    const data = await deleteProduct(id);

    revalidatePath("/admin/products"); // Update cached posts
    redirect("/admin/products");
    // console.log(image);
  };

  return (
    <tr className={styles.row}>
      <td className={styles.name}>{product.name}</td>
      <td className={styles.price}>${product.price}</td>
      <td className={styles.availability}>
        {product.inStock ? "availabe" : "out of stock"}
      </td>
      <td>
        <form
          className={styles.action}
          action={productAction.bind(null, product)}
        >
          <button>Edit</button>
          <button type="submit">Delete</button>
        </form>
      </td>
    </tr>
  );
};

export default AdminPostsItem;

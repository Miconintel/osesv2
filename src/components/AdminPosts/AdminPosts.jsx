import React from "react";
import { getProducts } from "@/lib/data/productData";
import AdminPostsItem from "./AdminPostsItem/AdminPostsItem";
import styles from "./AdminPosts.module.css";

// const AdminPosts = async () => {
//   const products = await getProducts();
//   // console.log(products);
//   const itemJsx = products.map((product) => (
//     <AdminPostsItem product={product} key={product.id}></AdminPostsItem>
//   ));
//   return <ul className={styles.list}>{itemJsx}</ul>;
// };

const AdminPosts = async () => {
  const products = await getProducts();
  const itemJsx = products.map((product) => (
    <AdminPostsItem product={product} key={product.id}></AdminPostsItem>
  ));
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th>name</th>
          <th>price</th>
          <th>availability</th>
          <th>actions</th>
        </tr>
      </thead>

      <tbody className={styles.body}>{itemJsx}</tbody>
    </table>
  );
};

export default AdminPosts;

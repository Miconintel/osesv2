import React from "react";
import styles from "./AdminPostsItem.module.css";

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

const AdminPostsItem = ({ product }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.name}>{product.name}</td>
      <td className={styles.price}>${product.price}</td>
      <td className={styles.availability}>available</td>
      <td className={styles.action}>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default AdminPostsItem;

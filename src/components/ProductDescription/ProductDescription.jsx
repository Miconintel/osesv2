import styles from "./ProductDescription.module.css";
import ProductDescriptionAction from "./ProductDescriptionAction/ProductDescriptionAction";

//
const ProductDescription = async ({ product }) => {
  const { name, description, price, category, coverImage } = product;

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <p className={styles.description}>
        {description ? (
          <span>{description}</span>
        ) : (
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo velit
            fugiat natus quo dicta recusandae laborum blanditiis. Velit nam quo
            voluptatibus similique temporibus quisquam distinctio. Esse dicta in
            velit cupiditate!
          </span>
        )}
      </p>
      <p className={styles.price}>
        <span>Price</span>: <span>${price}</span>
      </p>
      <p className={styles.category}>
        <span>Category</span>: <span>{category}</span>
      </p>
      <p className={styles.availability}>
        <span>Available</span>: <span>in-stock</span>
      </p>

      <ProductDescriptionAction />
    </div>
  );
};

export default ProductDescription;

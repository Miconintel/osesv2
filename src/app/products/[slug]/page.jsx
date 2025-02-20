import styles from "./page.module.css";
import DetailImage from "@/components/DetailImage/DetailImage";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import { getProduct } from "@/lib/data/productData";
const page = async ({ params, searchParams }) => {
  const { slug } = await params;

  const product = await getProduct(slug);

  return (
    <div className={styles.container}>
      <DetailImage image={product.coverImage}></DetailImage>
      <ProductDescription slug={slug} product={product} />
    </div>
  );
};

export default page;

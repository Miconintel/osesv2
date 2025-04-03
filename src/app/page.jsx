import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
import VectorImages from '@/components/VectorImages/VectorImages';
import Trending from '@/components/Trending/Trending';
import ClassificationSection from '@/components/ClassificationSection/ClassificationSection';
// import ProductList from "@/components/ProductList/ProductList";

// export const dynamic = "force-dynamic";
export const revalidate = 0;

//
export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.container} id="main">
        <ClassificationSection />
        <VectorImages />
        <Trending />
      </main>
    </>
  );
}

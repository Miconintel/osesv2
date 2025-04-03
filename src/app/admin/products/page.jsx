import classes from "./page.module.css";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import { Suspense } from "react";

const admin = () => {
  return (
    <main className={classes.container}>
      <AdminPosts />
      <Suspense fallback={<div>...loading</div>}>
        <AdminPostForm />
      </Suspense>
    </main>
  );
};

export default admin;

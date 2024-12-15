import classes from "./page.module.css";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminPosts from "@/components/AdminPosts/AdminPosts";

const admin = () => {
  return (
    <main className={classes.container}>
      <AdminPosts />
      <AdminPostForm />
    </main>
  );
};

export default admin;

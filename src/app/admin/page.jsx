import AdminPosts from "@/components/AdminPosts/AdminPosts";
import classes from "./admin.module.css";
import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";

const admin = () => {
  return (
    <main className={classes.container}>
      {/* <AdminPosts /> */}
      <AdminPostForm />
    </main>
  );
};

export default admin;

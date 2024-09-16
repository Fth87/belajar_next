import  styles from "@/styles/404.module.scss";
const CustomList = () => {
  return (
    <div className={styles.error}>
      <div>404 | Halaman tidak ditemukan</div>
      <img className={styles.error_image} src="/not_found.svg" alt="" />
    </div>
  );
};

export default CustomList;

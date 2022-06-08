import styles from "./search-input.module.scss";

export const SearchInput = () => {
  return (
    <form class={styles.form}>
      <input type="text" placeholder="Enter username or name" />
      <input type="submit" />
    </form>
  );
};

import styles from "./seach.module.scss";
import { SearchHeader } from "../../components";

export const SearchPage = () => {
  return (
    <main class={styles.main}>
      <SearchHeader />
    </main>
  );
};

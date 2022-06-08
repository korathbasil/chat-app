import styles from "./search.module.scss";
import { SearchHeader } from "../../components";

export const SearchPage = () => {
  return (
    <main class={styles.main}>
      <SearchHeader />
    </main>
  );
};

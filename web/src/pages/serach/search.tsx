import styles from "./search.module.scss";
import { SearchHeader, SearchInput } from "../../components";

export const SearchPage = () => {
  return (
    <main class={styles.main}>
      <SearchHeader />
      <SearchInput />
    </main>
  );
};

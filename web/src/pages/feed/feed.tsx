import styles from "./feed.module.scss";
import { Header, Posts } from "../../components";

export const FeedPage = () => {
  return (
    <main class={styles.main}>
      <Header />
      <Posts />
    </main>
  );
};

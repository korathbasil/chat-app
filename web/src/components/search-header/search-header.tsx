import { useNavigate } from "solid-app-router";

import styles from "./search-header.module.scss";
import { BackNav } from "../../assets/icons";

export const SearchHeader = () => {
  const navigate = useNavigate();
  return (
    <header class={styles.header}>
      <div onClick={() => navigate("../", { replace: true })}>
        <BackNav />
      </div>
    </header>
  );
};

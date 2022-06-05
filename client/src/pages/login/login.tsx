import { NavLink } from "solid-app-router";

import styles from "./login.module.scss";
import { Google } from "../../assets/icons";

export const LoginPage = () => {
  return (
    <section class={styles.main}>
      <NavLink href="/">
        <Google />
        <h2>Login with Google</h2>
      </NavLink>
    </section>
  );
};

import { NavLink } from "solid-app-router";

import { axios } from "../../config/axios";

import styles from "./login.module.scss";
import { Google } from "../../assets/icons";

export const LoginPage = () => {
  const googleLoginHandler = async () => {
    const result = await axios.post("/auth/google/login");
    console.log(result.data);
  };
  return (
    <main class={styles.main}>
      <div class={styles.child}>
        <h1>Ngage</h1>

        <h2>
          <span>Engage</span>
          <span>with your</span>
          <span>loved ones</span>
        </h2>

        <div class={styles.actions}>
          <NavLink onClick={googleLoginHandler} href="/">
            <Google />
            <h2>Login with Google</h2>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

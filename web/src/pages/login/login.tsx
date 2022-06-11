import { NavLink } from "solid-app-router";

import styles from "./login.module.scss";
// import { Google } from "../../assets/icons";

export const LoginPage = () => {
  return (
    <main class={styles.main}>
      <div class={styles.child}>
        <h1>Ngage</h1>

        <h2>
          <span>Engage</span>
          <span>with your</span>
          <span>loved ones</span>
        </h2>

        <form>
          <label for="username">Username</label>
          <input type="username" name="username" />
          <label for="password">Password</label>
          <input type="password" name="password" />
          <input type="submit" value="Login" />
          <NavLink href="/signup">Create Account</NavLink>
        </form>

        <div class={styles.actions}>
          {/* <a href="http://localhost:8000/api/v1/auth/google/login">
            <Google />
            <h2>Login with Google</h2>
          </a> */}
        </div>
      </div>
    </main>
  );
};

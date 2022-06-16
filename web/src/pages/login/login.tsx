import { NavLink, useNavigate } from "solid-app-router";
import { createStore } from "solid-js/store";

import { auth } from "../../config/axios";
import { setUser } from "../../data-store/user";

import styles from "./login.module.scss";
// import { Google } from "../../assets/icons";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = createStore({
    username: "",
    password: "",
  });

  type FormEvent = Event & {
    currentTarget: HTMLInputElement;
    target: Element;
  };

  const updateFormField = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    setForm({
      [fieldName]: inputElement.value,
    });
  };

  const formSubmitHandler = (e: Event) => {
    e.preventDefault();

    auth
      .post("/login", {
        username: form.username,
        password: form.password,
      })
      .then(({ data }) => {
        setUser(() => ({
          id: data._id,
          name: data.name,
          email: data.username,
          phone: "2323232",
          username: data.username,
          profilePicture: data.profilePicture,
        }));
        navigate("/");
      })
      .catch((e) => console.log(e.response.data));
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

        <form onSubmit={formSubmitHandler}>
          <label for="username">Username</label>
          <input
            type="username"
            name="username"
            value={form.username}
            onChange={(e) => updateFormField("username")(e)}
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => updateFormField("password")(e)}
          />
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

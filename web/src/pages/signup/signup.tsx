import { createStore } from "solid-js/store";
import { NavLink, useNavigate } from "solid-app-router";

import { auth } from "../../config/axios";
import { setUser } from "../../data-store/user";

import styles from "./signup.module.scss";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = createStore({
    name: "",
    email: "",
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

  const formSublitHandler = (e: Event) => {
    e.preventDefault();
    auth
      .post("/signup", {
        name: form.name,
        email: form.email,
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

        <form onSubmit={formSublitHandler}>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => updateFormField("name")(e)}
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => updateFormField("email")(e)}
          />
          <label for="username">Username</label>
          <input
            type="text"
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
          <input type="submit" value="Signup" />
          <NavLink href="/login">Already hasve an Account ?</NavLink>
        </form>
      </div>
    </main>
  );
};

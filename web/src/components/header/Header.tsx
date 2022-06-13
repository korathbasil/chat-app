import type { Component } from "solid-js";
import { NavLink } from "solid-app-router";

import { user } from "../../data-store/user";

import styles from "./header.module.scss";
import { Search, Profile } from "../../assets/icons";

export const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1>Ngage+</h1>
      <div class={styles.right}>
        <NavLink href="/search">
          <Search />
        </NavLink>

        {user()?.profilePicture ? (
          <img src={user()?.profilePicture} />
        ) : (
          <Profile />
        )}
      </div>
    </header>
  );
};

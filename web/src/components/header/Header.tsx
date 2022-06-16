import type { Component } from "solid-js";
import { NavLink } from "solid-app-router";

import { user } from "../../data-store/user";

import styles from "./header.module.scss";
import { Search, Profile } from "../../assets/icons";
import { Avatar } from "../../components/avatar/avatar";

export const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1>Ngage+</h1>
      <div class={styles.right}>
        <NavLink href="/search">
          <Search />
        </NavLink>
        {user()?.profilePicture ? (
          <Avatar image={user()?.profilePicture} />
        ) : (
          <Avatar />
        )}
      </div>
    </header>
  );
};

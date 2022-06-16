import type { Component } from "solid-js";
import { NavLink } from "solid-app-router";

import styles from "./header.module.scss";
import { Search, Bell } from "../../assets/icons";

export const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1>Ngage+</h1>
      <div class={styles.right}>
        <NavLink href="/search">
          <Search />
        </NavLink>

        <NavLink href="/notification">
          <Bell />
        </NavLink>
      </div>
    </header>
  );
};

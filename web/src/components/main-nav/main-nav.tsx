import { NavLink } from "solid-app-router";

import styles from "./main-nav.module.scss";
import { Feed, Chats, Profile, Finder } from "../../assets/icons";

export const MianNav = () => {
  return (
    <nav class={styles.nav}>
      <NavLink href="/">
        <li>
          <Feed size="25px" />
          <p>Feed</p>
        </li>
      </NavLink>
      <NavLink href="/chats">
        <li>
          <Chats size="25px" />
          <p>Chats</p>
        </li>
      </NavLink>
      <NavLink href="/finder">
        <li>
          <Finder size="25px" />
          <p>Finder</p>
        </li>
      </NavLink>
      <NavLink href="/profile">
        <li>
          <Profile size="25px" />
          <p>Profile</p>
        </li>
      </NavLink>
    </nav>
  );
};

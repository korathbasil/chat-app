import type { Component } from "solid-js";

import styles from "./chats.module.scss";
import { PinnedChats, Chats, CustomHeader } from "../../components";
import { Add, Search } from "../../assets/icons";
import { NavLink } from "solid-app-router";

export const ChatsPage: Component = () => {
  return (
    <section class={styles.chats}>
      <CustomHeader
        left={
          <>
            <h2>Chat</h2>
          </>
        }
        right={HeaderRight}
      />
      <PinnedChats />
      <Chats />
    </section>
  );
};

const HeaderRight = () => {
  return (
    <div class={styles.headerRight}>
      <Search />
      <NavLink href="/chats/new">
        <Add />
      </NavLink>
    </div>
  );
};

import type { Component } from "solid-js";

import styles from "./chat.module.scss";
import { ChatHeader, ChatBody, ChatActions } from "../../components";

export const ChatPage: Component = () => {
  return (
    <section class={styles.parent}>
      <ChatHeader />
      <div class={styles.chatBody}>
        <ChatBody />
      </div>
      <ChatActions />
    </section>
  );
};

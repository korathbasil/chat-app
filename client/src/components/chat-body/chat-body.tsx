import type { Component } from "solid-js";

import styles from "./chat-body.module.scss";

export const ChatBody: Component = () => {
  return <div class={styles.main}>Messages</div>;
};

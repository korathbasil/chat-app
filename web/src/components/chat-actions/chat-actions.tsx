import styles from "./chat-actions.module.scss";

import { Mic, Send } from "../../assets/icons";

export const ChatActions = () => {
  return (
    <form class={styles.form}>
      <input type="text" />
      <Mic />
      <Send />
    </form>
  );
};

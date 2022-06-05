import { Component } from "solid-js";
import { NavLink } from "solid-app-router";

import styles from "./chats.module.scss";

export const Chats = () => {
  return (
    <section class={styles.main}>
      <p>CHATS</p>
      <div>
        <NavLink href="/chat">
          <Chat
            avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
            name="John Carby"
            lastMessage="I will see you"
            timeStamp="12:02 AM"
          />
        </NavLink>
        <NavLink href="/chat">
          <Chat
            avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
            name="John Carby"
            lastMessage="I will see you"
            timeStamp="12:02 AM"
          />
        </NavLink>
        <NavLink href="/chat">
          <Chat
            avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
            name="John Carby"
            lastMessage="I will see you"
            timeStamp="12:02 AM"
          />
        </NavLink>
      </div>
    </section>
  );
};

interface ChatProps {
  avatar: string;
  name: string;
  lastMessage: string;
  timeStamp: string;
}

const Chat: Component<ChatProps> = ({
  avatar,
  name,
  lastMessage,
  timeStamp,
}) => {
  return (
    <div class={styles.chat}>
      <div class={styles.left}>
        <img src={avatar} alt="profile_image" />
        <div>
          <h3>{name}</h3>
          <p>{lastMessage}</p>
        </div>
      </div>
      <div class={styles.right}>
        <p>{timeStamp}</p>
      </div>
    </div>
  );
};

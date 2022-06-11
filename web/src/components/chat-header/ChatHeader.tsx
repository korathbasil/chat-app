import type { Component } from "solid-js";
import { useNavigate } from "solid-app-router";

import styles from "./chat-header.module.scss";
import { BackNav, NewAudioCall, NewVideoCall } from "../../assets/icons";

export const ChatHeader: Component = () => {
  const navigate = useNavigate();

  return (
    <header class={styles.header}>
      <div class={styles.left}>
        <div onClick={() => navigate("../", { replace: true })}>
          <BackNav />
        </div>
        <div class={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="profile picture"
          />
          <div>
            <h3>Amy Anderson</h3>
            <p>Active now</p>
          </div>
        </div>
      </div>
      <div class={styles.right}>
        <NewAudioCall />
        <NewVideoCall />
      </div>
    </header>
  );
};

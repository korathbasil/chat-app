import type { Component } from "solid-js";
import { style } from "solid-js/web";

import styles from "./pinned-chats.module.scss";

export const PinnedChats: Component = () => {
  return (
    <div class={styles.main}>
      <p>PINNED CHATS</p>
      <div class={styles.profiles}>
        <Profile
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          name="Amy Adams"
        />
        <Profile
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          name="Amy Adams"
        />
        <Profile
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          name="Amy Adams"
        />
        <Profile
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          name="Amy Adams"
        />
      </div>
    </div>
  );
};

interface ProfileProps {
  avatar: string;
  name: string;
}

const Profile: Component<ProfileProps> = ({ avatar, name }) => {
  return (
    <div class={styles.profile}>
      <img src={avatar} alt="profile_image" />
      <p>{name}</p>
    </div>
  );
};

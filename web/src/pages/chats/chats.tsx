import type { Component } from "solid-js";

import { Header, PinnedChats, Chats } from "../../components";

export const ChatsPage: Component = () => {
  return (
    <>
      <Header />
      <PinnedChats />
      <Chats />
    </>
  );
};

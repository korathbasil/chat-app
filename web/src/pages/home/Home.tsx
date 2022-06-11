import type { Component } from "solid-js";

import { Header, PinnedChats, Chats } from "../../components";

export const HomePage: Component = () => {
  return (
    <>
      <Header />
      <PinnedChats />
      <Chats />
    </>
  );
};

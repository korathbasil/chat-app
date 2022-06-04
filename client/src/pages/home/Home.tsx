import type { Component } from "solid-js";

import { Header, PinnedChats } from "../../components";

export const HomePage: Component = () => {
  return (
    <>
      <Header />
      <PinnedChats />
    </>
  );
};

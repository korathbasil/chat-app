import type { Component } from "solid-js";
import { Navigate, Route, Routes } from "solid-app-router";

import { user } from "../data-store/user";

import { MianNav } from "../components";
import { FeedPage, ChatsPage, SearchPage } from "../pages";

export const PrivateApp = () => {
  return (
    <main>
      <Routes>
        <Route path="/search" element={<AuthComponent child={SearchPage} />} />
        <Route path="/chats" element={<AuthComponent child={ChatsPage} />} />
        <Route path="/feed" element={<AuthComponent child={FeedPage} />} />
        <Route path="/" element={<AuthComponent child={FeedPage} />} />
      </Routes>
      <MianNav />
    </main>
  );
};

const AuthComponent: Component<{ child: Component }> = ({ child }) => {
  if (user()) return <>{child}</>;
  else return <Navigate href="/login" />;
};

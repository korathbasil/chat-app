import type { Component } from "solid-js";
import { Navigate, Route, Routes } from "solid-app-router";

import { user } from "../data-store/user";

import { MianNav } from "../components";
import { ChatPage, FeedPage, HomePage, SearchPage } from "../pages";

export const PrivateApp = () => {
  return (
    <main>
      <Routes>
        <Route path="/search" element={<AuthComponent child={SearchPage} />} />
        <Route path="/chat" element={<AuthComponent child={ChatPage} />} />
        <Route path="/feed" element={<AuthComponent child={FeedPage} />} />
        <Route path="/" element={<AuthComponent child={HomePage} />} />
      </Routes>
      <MianNav />
    </main>
  );
};

const AuthComponent: Component<{ child: Component }> = ({ child }) => {
  if (user()) return <>{child}</>;
  else return <Navigate href="/login" />;
};

import { Component, createEffect, createSignal } from "solid-js";
import { Navigate, Route, Routes, useLocation } from "solid-app-router";

import { user } from "../data-store/user";

import { MianNav } from "../components";
import {
  FeedPage,
  ChatsPage,
  SearchPage,
  NewPostPage,
  ProfilePage,
} from "../pages";

export const PrivateApp = () => {
  const location = useLocation();
  const [hideMainNav, setHideMainNav] = createSignal(false);

  const hideNavRoutes = ["new-post"];

  createEffect(() => {
    const currPath = location.pathname;
    const mainPath = currPath.split("/")[1];

    setHideMainNav(hideNavRoutes.includes(mainPath));
  });
  return (
    <main>
      <Routes>
        <Route
          path="/profile"
          element={<AuthComponent child={ProfilePage} />}
        />
        <Route path="/search" element={<AuthComponent child={SearchPage} />} />
        <Route path="/chats" element={<AuthComponent child={ChatsPage} />} />
        <Route path="/feed" element={<AuthComponent child={FeedPage} />} />
        <Route
          path="/new-post"
          element={<AuthComponent child={NewPostPage} />}
        />
        <Route path="/" element={<AuthComponent child={FeedPage} />} />
      </Routes>
      {!hideMainNav() && <MianNav />}
    </main>
  );
};

const AuthComponent: Component<{ child: Component }> = ({ child }) => {
  if (user()) return <>{child}</>;
  else return <Navigate href="/login" />;
};

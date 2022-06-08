import { Component } from "solid-js";
import { Routes, Route, Navigate } from "solid-app-router";

import { user } from "../data-store/user";

import { HomePage, ChatPage, LoginPage, SearchPage } from "../pages";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<AuthComponent child={ChatPage} />} />
        <Route path="/search" element={<AuthComponent child={SearchPage} />} />
        <Route path="/" element={<AuthComponent child={HomePage} />} />
      </Routes>
    </div>
  );
};

const AuthComponent: Component<{ child: Component }> = ({ child }) => {
  if (user()) return <>{child}</>;
  else return <Navigate href="/login" />;
};

export default App;

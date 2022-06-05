import type { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";

import { HomePage, ChatPage, LoginPage } from "../pages";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

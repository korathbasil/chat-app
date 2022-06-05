import type { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";

import { HomePage, ChatPage } from "../pages";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;

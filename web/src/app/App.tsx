import { Component } from "solid-js";
import { Routes, Route } from "solid-app-router";

import { PrivateApp } from "./private-app";
import { LoginPage, SignupPage, GoogleLoginRedirect } from "../pages";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login/google" element={<GoogleLoginRedirect />} />
        <Route path="*" element={<PrivateApp />} />
      </Routes>
    </div>
  );
};

export default App;

import type { Component } from "solid-js";

import { IconProps } from "./types";

export const BackNav: Component<IconProps> = ({ size = "30px" }) => (
  <div style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24">
      <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
    </svg>
  </div>
);

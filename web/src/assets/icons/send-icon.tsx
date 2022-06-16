import type { Component } from "solid-js";

import { IconProps } from "./types";

export const Send: Component<IconProps> = ({ size = "30px" }) => (
  <div style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24">
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
    </svg>
  </div>
);

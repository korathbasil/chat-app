import type { Component } from "solid-js";

import { IconProps } from "./types";

export const Add: Component<IconProps> = ({ size = "30px" }) => (
  <div style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </svg>
  </div>
);

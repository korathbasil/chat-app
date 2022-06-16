import type { Component } from "solid-js";

import { IconProps } from "./types";

export const Chats: Component<IconProps> = ({ size = "30px" }) => (
  <div style={{ width: size, height: size }}>
    <svg viewBox="0 0 24 24">
      <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
    </svg>
  </div>
);

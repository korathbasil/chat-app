import type { Component, JSX } from "solid-js";

import styles from "./custom-header.module.scss";

interface CustomHeaderProps {
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
}

export const CustomHeader: Component<CustomHeaderProps> = ({
  left,
  center,
  right,
}) => {
  return (
    <header class={styles.header}>
      <div class={styles.left}>{left ? left : null}</div>
      <div class={styles.center}>{center ? center : null}</div>
      <div class={styles.right}>{right ? right : null}</div>
    </header>
  );
};

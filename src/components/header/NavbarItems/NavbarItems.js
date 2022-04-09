import React from "react";
import styles from "./navbar_items.module.css";

export default function NavbarItems() {
  return (
    <ul className={styles.Navbar_items}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  );
}

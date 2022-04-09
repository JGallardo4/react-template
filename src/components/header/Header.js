import logo from "../../assets/logo.svg";
import styles from "./header.module.css";
import NavbarItems from "./NavbarItems/NavbarItems";

function Header() {
  return (
    <header className={styles.Navbar}>
      <img src={logo} alt="logo" className={styles.Navbar_logo} />
      <NavbarItems />
    </header>
  );
}

export default Header;

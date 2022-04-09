import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import styles from "../css/main.module.css";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

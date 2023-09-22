import type { Component } from "solid-js";
import styles from "./App.module.css";
import MyComponent from "./components/MyComponent";
import SwitchMatch from "./components/SwitchMatch";

const App: Component = () => {
  return (
    <div class={styles.App}>
      {/* <MyComponent name={"Elbert"} /> */}
      <SwitchMatch />
    </div>
  );
};

export default App;

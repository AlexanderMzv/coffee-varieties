import "./styles/reset.css";
import "./styles/global.less";

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

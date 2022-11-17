import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "./store";

async function main() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mocks/browser");
    worker.start();
  }

  const rootElement = document.getElementById("root") as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);
  const store = createStore();
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

main();

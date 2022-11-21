import { ConfigProvider } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

const container = document.getElementById("app");

const root = createRoot(container);

root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "red",
      },
    }}
  >
    <App />
  </ConfigProvider>
);

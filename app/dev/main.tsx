// dev/main.ts
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Layout from "./templates/Layout";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<Layout child={<App />} />);

export default App;

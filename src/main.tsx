import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import Page from "./components/Page.tsx";
import Teaser from "./components/Teaser.tsx";
import Feature from "./components/Feature.tsx";
import Grid from "./components/Grid.tsx";

storyblokInit({
  accessToken: "jdeMxRmerezgRgrCm0SMLgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

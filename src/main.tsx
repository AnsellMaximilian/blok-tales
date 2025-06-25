import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import Page from "./components/Page.tsx";
import Teaser from "./components/Teaser.tsx";
import Feature from "./components/Feature.tsx";
import Grid from "./components/Grid.tsx";
import Scene from "./components/tales/Scene.tsx";
import Narration from "./components/tales/Narration.tsx";
import Dialog from "./components/tales/Dialog.tsx";
import Character from "./components/tales/Character.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

storyblokInit({
  accessToken: "jdeMxRmerezgRgrCm0SMLgtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid,

    //tales
    scene: Scene,
    narration: Narration,
    dialog: Dialog,
    character: Character,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

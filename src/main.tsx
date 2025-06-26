import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { apiPlugin, storyblokInit } from "@storyblok/react";

import Scene from "./components/tales/Scene.tsx";
import Narration from "./components/tales/Narration.tsx";
import Dialog from "./components/tales/Dialog.tsx";
import Character from "./components/tales/Character.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Choice from "./components/tales/Choice.tsx";
import Menu from "./components/tales/Menu.tsx";

storyblokInit({
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    //tales
    scene: Scene,
    narration: Narration,
    dialog: Dialog,
    character: Character,
    choice: Choice,

    menu: Menu,
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

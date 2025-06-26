import { useLocation } from "react-router-dom";
import "./App.css";
import { StoryblokComponent, useStoryblok } from "@storyblok/react";

function App() {
  const location = useLocation();

  const slug =
    location.pathname === "/" ? "main-menu" : location.pathname.slice(1);

  const story = useStoryblok(slug, {
    version: "draft",
    resolve_relations: ["choice.next_scene", "menu.scene"],
  });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;

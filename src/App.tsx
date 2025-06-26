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
    return (
      <div className="w-screen h-screen bg-black flex items-center justify-center">
        <div className="text-green-400 font-share-tech-mono text-xl tracking-wider animate-flicker text-center">
          <div>INITIALIZING SYSTEM...</div>
          <div className="mt-2 animate-pulse text-2xl">█</div>
        </div>
      </div>
    );
  }

  return <StoryblokComponent blok={story.content} />;
}

export default App;

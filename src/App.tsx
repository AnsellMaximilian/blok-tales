import "./App.css";
import { StoryblokComponent, useStoryblok } from "@storyblok/react";

function App() {
  const slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");
  const story = useStoryblok(slug, {
    version: "draft",
    resolve_relations: "choice.next_scene",
  });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }
  return <StoryblokComponent blok={story.content} />;
}

export default App;

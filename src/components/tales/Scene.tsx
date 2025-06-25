import {
  StoryblokComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react";
import { createRef, useState } from "react";

const Scene = ({ blok }: { blok: SbBlokData }) => {
  //   console.log({ blok });

  const [progression, setProgression] = useState(0);

  const bg = blok?.background?.filename;

  const currentContent =
    blok?.content && blok.content[progression]
      ? blok.content[progression]
      : null;

  console.log({ currentContent });

  const currentContentComponent = currentContent ? (
    <StoryblokComponent blok={currentContent} key={currentContent._uid} />
  ) : null;
  return (
    <main
      {...storyblokEditable(blok)}
      className="w-screen h-screen overflow-hidden relative p-4 flex flex-col"
      onClick={() => {
        setProgression((prev) => prev + 1);
      }}
      style={{
        background: bg ? `url('${bg}')` : undefined,
      }}
    >
      <div className="mt-auto">{currentContentComponent}</div>
    </main>
  );
};

export default Scene;

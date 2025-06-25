import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useState } from "react";
import type { SceneBlok } from "../../types/bloks";
import { AnimatePresence, motion } from "framer-motion";

const Scene = ({ blok }: { blok: SceneBlok }) => {
  //   console.log({ blok });

  const [progression, setProgression] = useState(0);

  const bg = blok?.background?.filename;

  const currentContent =
    blok?.content && blok.content[progression]
      ? blok.content[progression]
      : null;

  console.log({ currentContent });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.button === 0) {
      // Left click = forward
      setProgression((prev) => Math.min(prev + 1, blok.content.length - 1));
    } else if (e.button === 2) {
      // Right click = backward
      setProgression((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <main
      {...storyblokEditable(blok)}
      className="w-screen h-screen overflow-hidden relative p-4 flex flex-col"
      onMouseDown={handleClick}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        background: bg ? `url('${bg}')` : undefined,
      }}
    >
      <div className="mt-auto">
        <AnimatePresence mode="wait">
          {currentContent && (
            <motion.div
              key={currentContent._uid}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <StoryblokComponent blok={currentContent} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Scene;

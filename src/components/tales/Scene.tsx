import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import type { SceneBlok } from "../../types/bloks";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Scene = ({ blok }: { blok: SceneBlok }) => {
  const location = useLocation();
  const [progression, setProgression] = useState(0);

  useEffect(() => {
    const timeOut = setTimeout(() => setProgression(0), 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [location.pathname]);

  const bg = blok?.background?.filename;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.button === 0) {
      // Left click = forward
      setProgression((prev) => Math.min(prev + 1, blok.content.length));
    } else if (e.button === 2) {
      // Right click = backward
      setProgression((prev) => Math.max(prev - 1, 0));
    }
  };

  const isInChoiceState = progression >= blok.content.length;

  const currentContent = blok.content[progression]
    ? blok.content[progression]
    : null;

  return (
    <main
      {...storyblokEditable(blok)}
      className="w-screen h-screen overflow-hidden relative p-4 flex flex-col bg-no-repeat bg-cover bg-center"
      onMouseDown={handleClick}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        backgroundImage: bg ? `url('${bg}')` : undefined,
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

          {isInChoiceState && (
            <motion.div
              key="choices"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-2"
            >
              {blok.choices.map((choice) => (
                <StoryblokComponent blok={choice} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Scene;

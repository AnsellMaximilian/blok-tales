import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import type { SceneBlok } from "../../types/bloks";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import storybloklogo from "../../assets/storyblok.svg";

const Scene = ({ blok }: { blok: SceneBlok }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const startAtEnd = searchParams.get("start_at_end") === "true";
  const prevSceneSlug = searchParams.get("prev_scene");

  const isFinalScene = blok.choices.length === 0;

  const [progression, setProgression] = useState(0);

  useEffect(() => {
    // Reset progression on path change
    const timeout = setTimeout(() => {
      setProgression(startAtEnd ? blok.content.length : 0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname, blok.content.length, startAtEnd]);

  const bg = blok.background.filename;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.button === 0) {
      // Left click = forward
      setProgression((prev) => Math.min(prev + 1, blok.content.length));
    } else if (e.button === 2) {
      // Right click = backward
      if (progression > 0) {
        setProgression((prev) => Math.max(prev - 1, 0));
      } else if (prevSceneSlug) {
        navigate(`/${prevSceneSlug}?start_at_end=true`);
      }
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

          {isFinalScene && isInChoiceState && (
            <motion.div
              key="end-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex justify-center items-center stm-font"
            >
              <div className="flex items-center flex-col">
                <div className="mb-24">
                  <div className="bg-black p-4 rounded-full px-24 mb-4">
                    <div className="font-bold text-6xl text-green-400 drop-shadow-[0_0_4px_lime]">
                      You Finished Storyblok
                    </div>
                  </div>

                  <div className="bg-black p-4 text-white w-fit flex gap-4 items-end mx-auto rounded-md">
                    <div>Start Using</div>
                    <a href="https://www.storyblok.com/" target="_blank">
                      <img src={storybloklogo} className="w-24" />
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      navigate(`/`);
                    }}
                    className="bg-black text-green-400 border-4 border-green-600 p-4 transition hover:shadow-[0_0_20px_#00ff88] hover:scale-[1.02] hover:border-green-400 cursor-pointer duration-200 ease-in-out text-4xl rounded-md"
                  >
                    Main Menu
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Scene;

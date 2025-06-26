import { storyblokEditable, type ISbStoryData } from "@storyblok/react";
import type { ChoiceBlok } from "../../types/bloks";
import TextContainer from "../ui/TextContainer";
import { useLocation, useNavigate } from "react-router-dom";

const Choice = ({ blok }: { blok: ChoiceBlok }) => {
  const isNextSceneBlok = typeof blok.next_scene !== "string";
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TextContainer
      {...storyblokEditable(blok)}
      className="transition hover:shadow-[0_0_20px_#00ff88] hover:scale-[1.02] hover:border-green-400 cursor-pointer duration-200 ease-in-out"
      onClick={() => {
        if (isNextSceneBlok) {
          const nextScene = blok.next_scene[0] as ISbStoryData;
          const currentSlug = location.pathname.replace(/^\//, "");

          navigate(`/${nextScene.slug}?prev_scene=${currentSlug}`);
        }
      }}
    >
      {blok.label}
    </TextContainer>
  );
};

export default Choice;

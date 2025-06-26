import { storyblokEditable, type ISbStoryData } from "@storyblok/react";
import type { ChoiceBlok } from "../../types/bloks";
import TextContainer from "../ui/TextContainer";
import { useNavigate } from "react-router-dom";

const Choice = ({ blok }: { blok: ChoiceBlok }) => {
  const isNextSceneBlok = typeof blok.next_scene !== "string";
  const navigate = useNavigate();

  return (
    <TextContainer
      {...storyblokEditable(blok)}
      className="cursor-pointer"
      onClick={() => {
        if (isNextSceneBlok) {
          const nextScene = blok.next_scene[0] as ISbStoryData;
          navigate(`/${nextScene.slug}`);
        }
      }}
    >
      {blok.label}
    </TextContainer>
  );
};

export default Choice;

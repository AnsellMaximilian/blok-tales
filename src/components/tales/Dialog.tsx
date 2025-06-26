import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import type { DialogBlok } from "../../types/bloks";
import TextContainer from "../ui/TextContainer";

const Dialog = ({ blok }: { blok: DialogBlok }) => {
  console.log(blok.characters);
  return (
    <div {...storyblokEditable(blok)}>
      <div className="relative flex">
        <div className="-mb-16 flex justify-start w-1/2">
          {blok.characters
            .filter((char) => char.side === "LEFT")
            .map((char) => {
              return <StoryblokComponent blok={char} key={char._uid} />;
            })}
        </div>
        <div className="-mb-16 flex justify-end w-1/2">
          {blok.characters
            .filter((char) => char.side === "RIGHT")
            .map((char) => {
              return <StoryblokComponent blok={char} key={char._uid} />;
            })}
        </div>
      </div>
      <TextContainer className="relative z-20 min-h-44">
        <div>
          {blok.characters?.map((char, index) => (
            <strong key={char._uid}>
              {char.name}
              {index < blok.characters.length - 1 ? ", " : ""}
            </strong>
          ))}
        </div>
        {blok.text as string}
      </TextContainer>
    </div>
  );
};

export default Dialog;

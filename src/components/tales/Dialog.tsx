import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import type { DialogBlok } from "../../types/bloks";

const Dialog = ({ blok }: { blok: DialogBlok }) => {
  console.log({ char: blok });
  return (
    <div {...storyblokEditable(blok)}>
      <div className="-mb-16 flex justify-end">
        {blok.characters?.map((char) => {
          return <StoryblokComponent blok={char} key={char._uid} />;
        })}
      </div>
      <div className="text-white bg-amber-600 border-4 border-amber-800 p-4 relative z-20 min-h-44">
        <div>
          {blok.characters?.map((char, index) => (
            <strong key={char._uid}>
              {char.name}
              {index < blok.characters.length - 1 ? ", " : ""}
            </strong>
          ))}
        </div>
        {blok.text as string}
      </div>
    </div>
  );
};

export default Dialog;

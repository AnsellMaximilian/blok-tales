import { storyblokEditable } from "@storyblok/react";
import type { CharacterBlok } from "../../types/bloks";

const Character = ({ blok }: { blok: CharacterBlok }) => (
  <div {...storyblokEditable(blok)} className="">
    <img
      src={blok?.image?.filename as string}
      className="h-96 md:h-[500px] lg:h-[600px]"
    />
  </div>
);

export default Character;

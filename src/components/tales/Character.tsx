import { storyblokEditable } from "@storyblok/react";
import type { CharacterBlok } from "../../types/bloks";

const Character = ({ blok }: { blok: CharacterBlok }) => (
  <div {...storyblokEditable(blok)} className="">
    <img src={blok?.image?.filename as string} className="h-96" />
  </div>
);

export default Character;

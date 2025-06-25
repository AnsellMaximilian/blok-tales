import { storyblokEditable, type SbBlokData } from "@storyblok/react";

const Character = ({ blok }: { blok: SbBlokData }) => (
  <div {...storyblokEditable(blok)} className="">
    <img src={blok?.image?.filename as string} className="h-96" />
  </div>
);

export default Character;

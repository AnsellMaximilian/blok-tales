import { storyblokEditable, type SbBlokData } from "@storyblok/react";

const Feature = ({ blok }: { blok: SbBlokData }) => (
  <div {...storyblokEditable(blok)} className="">
    {blok.name as string}
  </div>
);

export default Feature;

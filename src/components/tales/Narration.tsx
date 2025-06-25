import { storyblokEditable, type SbBlokData } from "@storyblok/react";

const Narration = ({ blok }: { blok: SbBlokData }) => (
  <div
    {...storyblokEditable(blok)}
    className="text-white bg-amber-600 border-4 border-amber-800 p-4"
  >
    {blok.text as string}
  </div>
);

export default Narration;

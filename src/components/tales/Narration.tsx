import { storyblokEditable } from "@storyblok/react";
import type { NarrationBlok } from "../../types/bloks";

const Narration = ({ blok }: { blok: NarrationBlok }) => (
  <div
    {...storyblokEditable(blok)}
    className="text-white bg-amber-600 border-4 border-amber-800 p-4"
  >
    {blok.text}
  </div>
);

export default Narration;

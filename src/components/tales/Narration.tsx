import { storyblokEditable } from "@storyblok/react";
import type { NarrationBlok } from "../../types/bloks";
import TextContainer from "../ui/TextContainer";

const Narration = ({ blok }: { blok: NarrationBlok }) => (
  <TextContainer {...storyblokEditable(blok)} className="min-h-44">
    {blok.text}
  </TextContainer>
);

export default Narration;

import { storyblokEditable, type SbBlokData } from "@storyblok/react";

const Teaser = ({ blok }: { blok: SbBlokData }) => {
  return (
    <h2 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      {blok.headline as string}
    </h2>
  );
};

export default Teaser;

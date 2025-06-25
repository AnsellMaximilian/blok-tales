import {
  StoryblokComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react";

const Dialog = ({ blok }: { blok: SbBlokData }) => {
  console.log({ char: blok });
  return (
    <div {...storyblokEditable(blok)}>
      <div className="-mb-16 flex justify-end">
        {blok.characters?.map((char) => {
          return <StoryblokComponent blok={char} key={char._uid} />;
        })}
      </div>
      <div className="text-white bg-amber-600 border-4 border-amber-800 p-4 relative z-20 min-h-44">
        <div>{blok.characters?.map((char) => `${char.name}, `)}</div>
        {blok.text as string}
      </div>
    </div>
  );
};

export default Dialog;

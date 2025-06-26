import { storyblokEditable, type ISbStoryData } from "@storyblok/react";
import type { MenuBlok } from "../../types/bloks";
import { useNavigate } from "react-router-dom";
import storybloklogo from "../../assets/storyblok.svg";

const Menu = ({ blok }: { blok: MenuBlok }) => {
  const navigate = useNavigate();
  const bg = blok.background.filename;

  console.log(blok);

  return (
    <main
      {...storyblokEditable(blok)}
      className="w-screen h-screen overflow-hidden relative p-4 flex flex-col bg-no-repeat bg-cover bg-center justify-center items-center stm-font"
      style={{
        backgroundImage: bg ? `url('${bg}')` : undefined,
      }}
    >
      <div className="mb-24">
        <div className="bg-black p-4 rounded-full px-24 mb-4">
          <div className="font-bold text-[100px] text-green-400 drop-shadow-[0_0_4px_lime]">
            {blok.title}
          </div>
        </div>

        <div className="bg-black p-4 text-white w-fit flex gap-4 items-end mx-auto rounded-md">
          <div>Powered By</div>
          <a href="https://www.storyblok.com/" target="_blank">
            <img src={storybloklogo} className="w-24" />
          </a>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            if (typeof blok.scene !== "string") {
              const scene = blok.scene[0] as ISbStoryData;
              navigate(`/${scene.slug}`);
            }
          }}
          className="bg-black text-green-400 border-4 border-green-600 p-4 w-44 transition hover:shadow-[0_0_20px_#00ff88] hover:scale-[1.02] hover:border-green-400 cursor-pointer duration-200 ease-in-out text-4xl rounded-md"
        >
          Play
        </button>
      </div>
    </main>
  );
};

export default Menu;

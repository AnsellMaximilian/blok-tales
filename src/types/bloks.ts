import type { SbBlokData } from "@storyblok/react";

export interface SbAsset {
  filename: string | null;
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  copyright: string;
  fieldtype: "asset";
  is_external_url: boolean;
}

export interface CharacterBlok extends SbBlokData {
  name: string;
  image: SbAsset;
}

export interface DialogBlok extends SbBlokData {
  text: string;
  characters: CharacterBlok[];
}

export interface NarrationBlok extends SbBlokData {
  text: string;
}

export interface SceneBlok extends SbBlokData {
  content: (NarrationBlok | DialogBlok)[];
  background: SbAsset;
  music: SbAsset;
}

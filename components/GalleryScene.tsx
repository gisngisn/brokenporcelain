"use client";

import { useState } from "react";
import Link from "next/link";

import ArtworkViewer from "./ArtworkViewer";
import ArtworkInfo from "./ArtworkInfo";
import Spotlight from "./Spotlight";
import GalleryMenu from "./GalleryMenu";
import GalleryControls from "./GalleryControls";
import KeyboardGallery from "./KeyboardGallery";

type Artwork = {
  id: string | number;
  image: string;
  title: string;
  description?: string;
};

const artworks: Artwork[] = [
  {
    id: 1,
    image: "/gallery/001qinghuan.webp",
    title: "Qinghuan",
    description:
      "A fragile porcelain memory preserved in silence.",
  },
   {
    id: "002",
    image: "/gallery/002memory.webp",
    title: "Memory",
  },
  {
    id: "003",
    image: "/gallery/003silence.webp",
    title: "Silence",
  },
  {
    id: "004",
    image: "/gallery/004FallenDream.webp",
    title: "Fallen Dream",
  },
  {
    id: "005",
    image: "/gallery/005forgotten.webp",
    title: "Forgotten",
  },
  {
    id: "006",
    image: "/gallery/006lastwhisper.webp",
    title: "Last Whisper",
  },
  {
    id: "007",
    image: "/gallery/007losttime.webp",
    title: "Lost Time",
  },
  {
    id: "008",
    image: "/gallery/008eternalsleep.webp",
    title: "Eternal Sleep",
  },
  {
    id: "009",
    image: "/gallery/009brokenpromise.webp",
    title: "Broken Promise",
  },
  {
    id: "010",
    image: "/gallery/010afterglow.webp",
    title: "Afterglow",
  },
  {
    id: "011",
    image: "/gallery/011emptyheart.webp",
    title: "Empty Heart",
  },
  {
    id: "012",
    image: "/gallery/012silenttear.webp",
    title: "Silent Tear",
  },
  {
    id: "013",
    image: "/gallery/013dreamfragment.webp",
    title: "Dream Fragment",
  },
  {
    id: "014",
    image: "/gallery/014fadingmemory.webp",
    title: "Fading Memory",
  },
  {
    id: "015",
    image: "/gallery/015lunarremains.webp",
    title: "Lunar Remains",
  },
  {
    id: "016",
    image: "/gallery/016hiddensoul.webp",
    title: "Hidden Soul",
  },
  {
    id: "017",
    image: "/gallery/017ColdGarde.webp",
    title: "Cold Garden",
  },
  {
    id: "018",
    image: "/gallery/018lostchild.webp",
    title: "Lost Child",
  },
  {
    id: "019",
    image: "/gallery/019DollWithoutaNam.webp",
    title: "Doll Without a Name",
  },
  {
    id: "020",
    image: "/gallery/020porcelainheart.webp",
    title: "Porcelain Heart",
  },
  {
    id: "021",
    image: "/gallery/021velvetnight.webp",
    title: "Velvet Night",
  },
  {
    id: "022",
    image: "/gallery/022dreamless.webp",
    title: "Dreamless",
  },
  {
    id: "023",
    image: "/gallery/023frostmemory.webp",
    title: "Frost Memory",
  },
  {
    id: "024",
    image: "/gallery/024echo.webp",
    title: "Echo",
  },
  {
    id: "025",
    image: "/gallery/025vanishing.webp",
    title: "Vanishing",
  },
  {
    id: "026",
    image: "/gallery/026neverawake.webp",
    title: "Never Awake",
  },
  {
    id: "027",
    image: "/gallery/027ashesofmemory.webp",
    title: "Ashes of Memory",
  },
  {
    id: "028",
    image: "/gallery/028silentkingdom.webp",
    title: "Silent Kingdom",
  },
  {
    id: "029",
    image: "/gallery/029beforedawn.webp",
    title: "Before Dawn",
  },
  {
    id: "030",
    image: "/gallery/030blackrosememory.webp",
    title: "Black Rose Memory",
  },
  {
    id: "031",
    image: "/gallery/031FaintExistence.webp",
    title: "Faint Existence",
  },
  {
    id: "032",
    image: "/gallery/032beyondsilence.webp",
    title: "Beyond Silence",
  },
  {
    id: "033",
    image: "/gallery/033endlesswinter.webp",
    title: "Endless Winter",
  },
  {
    id: "034",
    image: "/gallery/034glasstears.webp",
    title: "Glass Tears",
  },
  {
    id: "035",
    image: "/gallery/035forgottenmelody.webp",
    title: "Forgotten Melody",
  },
  {
    id: "036",
    image: "/gallery/036thehollowdream.webp",
    title: "The Hollow Dream",
  },
  {
    id: "037",
    image: "/gallery/037forgottenlullaby.webp",
    title: "Forgotten Lullaby",
  },
];

export default function GalleryScene() {
  const [current, setCurrent] = useState(0);

  const artwork = artworks[current];

  const previous = () => {
    setCurrent((value) =>
      value === 0
        ? artworks.length - 1
        : value - 1
    );
  };

  const next = () => {
    setCurrent((value) =>
      value === artworks.length - 1
        ? 0
        : value + 1
    );
  };

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        px-6
        text-white
      "
    >
      <Spotlight />

      <GalleryMenu />

      <KeyboardGallery
        onPrevious={previous}
        onNext={next}
      />

      <Link
        href="/"
        className="
          absolute
          bottom-10
          left-10
          z-40
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-white/40
          transition
          hover:text-white
        "
      >
        ← Back Home
      </Link>

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
        "
      >
        <ArtworkViewer
          key={artwork.id}
          image={artwork.image}
          title={artwork.title}
        />

        <ArtworkInfo
  title={artwork.title}
  description={artwork.description ?? ""}
/>
      </div>

      <GalleryControls
        current={current + 1}
        total={artworks.length}
        onPrevious={previous}
        onNext={next}
      />
    </main>
  );
}

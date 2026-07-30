import Image from "next/image";
import Link from "next/link";

const artworks = [
  {
    id: "001",
    image: "/gallery/001qinghuan.webp",
    title: "Qinghuan",
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
    image: "/gallery/004fallendream.webp",
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
    image: "/gallery/017coldgarde.webp",
    title: "Cold Garden",
  },
  {
    id: "018",
    image: "/gallery/018lostchild.webp",
    title: "Lost Child",
  },
  {
    id: "019",
    image: "/gallery/019dollwithoutanam.webp",
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
    image: "/gallery/031faintexistence.webp",
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

export default function CollectionPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#050505]
        px-10
        py-24
        text-white
      "
    >
      {/* 标题 */}
      <header
        className="
          mb-20
          text-center
        "
      >
        <p
          className="
            text-[10px]
            tracking-[0.7em]
            text-white/30
          "
        >
          BROKEN PORCELAIN DOLL
        </p>

        <h1
          className="
            mt-8
            font-serif
            text-5xl
            tracking-[0.35em]
          "
        >
          Gallery
        </h1>

        <p
          className="
            mt-6
            text-xs
            tracking-[0.4em]
            text-white/40
          "
        >
          Archive of Forgotten Memories
        </p>
      </header>

      {/* 返回 */}
      <Link
        href="/gallery"
        className="
          fixed
          left-10
          top-10
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-white/40
          hover:text-white
        "
      >
        ← Back Museum
      </Link>

      {/* 图片墙 */}
      <section
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-10
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {artworks.map((artwork) => (
          <Link
            key={artwork.id}
            href={`/gallery?id=${artwork.id}`}
            className="
              group
              relative
              overflow-hidden
              border
              border-white/10
              bg-black
            "
          >
            <div
              className="
                relative
                aspect-[2/3]
                overflow-hidden
              "
            >
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* 黑色玻璃层 */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/0
                  transition
                  duration-500
                  group-hover:bg-black/30
                "
              />
            </div>

            <div className="p-6">
              <p
                className="
                  text-[10px]
                  tracking-[0.5em]
                  text-white/30
                "
              >
                NO.{artwork.id}
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-xl
                  tracking-[0.3em]
                "
              >
                {artwork.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

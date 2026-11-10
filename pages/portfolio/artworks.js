// @ts-check
import { Artwork } from "./Artwork.js";

/*
 * THE PORTFOLIO LIST
 * ------------------
 * This is the only file to edit when adding, removing or reordering art.
 *
 * - Order here = order on the page. The grid fills top-to-bottom down the
 *   first column, then the second, then the third (CSS columns), and the
 *   detail view's ← / → arrows follow this same order.
 * - `id` just needs to be unique.
 * - Only `id`, `title` and `image` are required. See Artwork.js for the rest.
 */

const IMG = "assets/img/art";

export const artworks = [
  // ---- roughly column 1 ----
  new Artwork({
    id: 18,
    title: "Cell",
    alt: "cell",
    categories: ["all", "bio"],
    image: `${IMG}/bacteria/cell.jpg`,
    description: "", // TODO: add description
  }),
  new Artwork({
    id: 1,
    title: "Nose",
    categories: ["all", "bio"],
    image: `${IMG}/nose.png`,
    hoverThumbnail: `${IMG}/noseplain.png`,
    description: "Diversity in Medical Illustration: External Nose Anatomy on Roman Nose, 2025, Digitally Illustrated, 1080 x 1350 px.",
  }),
  new Artwork({
    id: 2,
    title: "Castle",
    categories: ["all", "editorial"],
    image: `${IMG}/castle.png`,
    description: "Environmental Illustration: Dracula's Castle, 2023, Pen and ink digitally colored, 11 x 8.5 in.",
  }),
  new Artwork({
    id: 3,
    title: "Sheep",
    categories: ["all", "editorial"],
    image: `${IMG}/sheep.png`,
    description: "Spot Illustration: Wool on Wool, 2023, Pen and Ink, 8 x 8 in.",
  }),
  new Artwork({
    id: 4,
    title: "Comic",
    categories: ["all", "editorial"],
    image: `${IMG}/comic.png`,
    description: "Howling Page Edition Two: Are you Prepared?, featured in artist collaboration newspaper, 2026, Pen and Ink, 9 x 12 in.",
  }),
  new Artwork({
    id: 5,
    title: "Pen PFP",
    categories: ["all", "editorial"],
    image: `${IMG}/penpfp.png`,
    description: "Spot Illustration: Pen Portrait, 2022, Pen and Ink, 9 x 12 in.",
  }),
  new Artwork({
    id: 15,
    title: "Warrior Inked",
    categories: ["all", "editorial"],
    image: `${IMG}/warrorinked.png`,
    hoverThumbnail: `${IMG}/warrior.png`,
    description: "Spot Illustration: Faithful Paladin, 2025, Pen and Ink Digitally Colored, 8 x 8 in.",
  }),

  // ---- roughly column 2 ----
  new Artwork({
    id: 19,
    title: "Shells",
    alt: "shells",
    categories: ["all", "bio"],
    image: `${IMG}/bacteria/shells.jpg`,
    description: "", // TODO: add description
  }),
  new Artwork({
    id: 6,
    title: "Matcha",
    categories: ["all", "editorial"],
    image: `${IMG}/matcha.png`,
    description: "Spot Illustration: Matcha Elephant, 2024, Watercolor, 8 x 8 in.",
  }),
  new Artwork({
    id: 20,
    title: "Petri Dish",
    alt: "petri dish",
    categories: ["all", "bio"],
    image: `${IMG}/bacteria/petri.jpg`,
    description: "", // TODO: add description
  }),
  new Artwork({
    id: 8,
    title: "Landscape Inked",
    categories: ["all", "editorial"],
    image: `${IMG}/landscapeinked.png`,
    hoverThumbnail: `${IMG}/landscape.png`,
    description: "Environmental Illustration: Forest Robot, 2025, Pen and ink digitally colored, 9 x 12 in.",
  }),
  new Artwork({
    id: 9,
    title: "Fire",
    categories: ["all", "editorial"],
    image: `${IMG}/fire.png`,
    description: "Environmental Illustration: Forest Fire Spirit, Pen and Ink Digitally Colored, 9 x 12 in.",
  }),
  new Artwork({
    id: 10,
    title: "Bindweed",
    categories: ["all", "bio"],
    image: `${IMG}/plants/11.png`,
    description: "Chicagoland invasive plants: Bindweed (Convolvulus arvensis), 2026, Watercolor pencil pen and ink, 9 x 12 in framed.",
  }),
  new Artwork({
    id: 16,
    title: "Pillbug",
    categories: ["all", "editorial"],
    image: `${IMG}/pillbug.png`,
    description: "Mini Exhibition Piece: Pillbug Taxidermy Mini-Comic, 2023, Colored Pencil Pen and Ink, 3 x 6 in.",
  }),

  // ---- roughly column 3 ----
  new Artwork({
    id: 7,
    title: "Eye",
    categories: ["all", "bio"],
    image: `${IMG}/eye.png`,
    hoverThumbnail: `${IMG}/eyeplain.png`,
    description: "Diversity in Medical Illustration: Tear Film Anatomy on Mono-lid, 2025, Digitally Illustrated, 1200 x 1800 px.",
  }),
  new Artwork({
    id: 21,
    title: "Coral",
    alt: "coral",
    categories: ["all", "bio"],
    image: `${IMG}/bacteria/coral.jpg`,
    description: "", // TODO: add description
  }),
  new Artwork({
    id: 11,
    title: "Tree of Heaven",
    caption: "Plant work",
    categories: ["all", "bio"],
    thumbnail: `${IMG}/plants/plants.gif`,
    image: `${IMG}/plants/10.png`,
    description: "Chicagoland invasive plants: Tree of Heaven (Ailanthus altissima), 2026, Watercolor pencil pen and ink, 9 x 12 in framed.",
  }),
  new Artwork({
    id: 12,
    title: "Ear",
    categories: ["all", "bio"],
    image: `${IMG}/ear.png`,
    hoverThumbnail: `${IMG}/earplain.png`,
    description: "Diversity in Medical Illustration: External Ear Anatomy with piercings and deep skin-tone, 2025, Digitally Illustrated, 2048 x 2028 px.",
  }),
  new Artwork({
    id: 13,
    title: "Metamorphosis",
    categories: ["all", "editorial"],
    image: `${IMG}/metamorphosis.png`,
    description: "Book cover design: The Metamorphosis, 2025, Pen and Ink, 9 x 12 in.",
  }),
  new Artwork({
    id: 14,
    title: "Shooting from the Hip",
    categories: ["all", "editorial"],
    image: `${IMG}/woman.png`,
    description: "Spot Illustration: Shooting from the Hip, 2026, Pen and Ink with digital color.",
  }),
  new Artwork({
    id: 17,
    title: "Dandelion",
    categories: ["all", "bio"],
    image: `${IMG}/plants/9.png`,
    description: "Chicagoland invasive plants: Dandelion (Taraxacum officinale), 2026, Watercolor pencil pen and ink, 9 x 12 in framed.",
  }),
];

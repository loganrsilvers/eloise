// @ts-check
// Entry point for index.html: draws the grid from artworks.js and wires up the detail view.
import { artworks } from "./artworks.js";
import { ProjectView } from "./ProjectView.js";

const grid = /** @type {HTMLElement} */ (document.getElementById("portfolio-grid"));
const projectView = new ProjectView(artworks, grid);

for (const art of artworks) {
  const tile = art.toGridItem();
  tile.addEventListener("click", () => projectView.openById(art.id));
  grid.append(tile);
}

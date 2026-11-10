// @ts-check

/** @typedef {import("./Artwork.js").Artwork} Artwork */

/**
 * The full-screen detail view (#project-view) with back / prev / next.
 */
export class ProjectView {
  /**
   * @param {Artwork[]} artworks  Same list (and order) as the grid
   * @param {HTMLElement} grid    The grid to hide while a project is open
   */
  constructor(artworks, grid) {
    this.artworks = artworks;
    this.grid = grid;
    this.index = 0;

    this.view = /** @type {HTMLElement} */ (document.getElementById("project-view"));
    this.title = /** @type {HTMLElement} */ (document.getElementById("project-title"));
    this.image = /** @type {HTMLImageElement} */ (document.getElementById("project-image"));
    this.description = /** @type {HTMLElement} */ (document.getElementById("project-description"));

    document.getElementById("back-to-grid")?.addEventListener("click", () => this.close());
    document.getElementById("prev-project")?.addEventListener("click", () => this.step(-1));
    document.getElementById("next-project")?.addEventListener("click", () => this.step(1));
  }

  /** @param {number} id */
  openById(id) {
    const index = this.artworks.findIndex(a => a.id === id);
    if (index === -1) return;
    this.index = index;
    this.render();
    this.grid.classList.add("hidden");
    this.view.classList.remove("hidden");
  }

  close() {
    this.view.classList.add("hidden");
    this.grid.classList.remove("hidden");
  }

  /** @param {number} direction  -1 for previous, +1 for next (wraps around) */
  step(direction) {
    const n = this.artworks.length;
    this.index = (this.index + direction + n) % n;
    this.render();
  }

  render() {
    const art = this.artworks[this.index];
    this.title.textContent = art.title;
    this.image.src = art.image;
    this.image.alt = art.title;
    this.description.textContent = art.description;
    this.description.classList.toggle("hidden", !art.description);
  }
}

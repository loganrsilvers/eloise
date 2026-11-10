// @ts-check

/**
 * One piece of art in the portfolio.
 *
 * Every image on the portfolio page is an *instance* of this class
 * (see artworks.js). The class knows how to draw its own grid tile.
 */
export class Artwork {
  /**
   * @param {object} data
   * @param {number} data.id                Unique number (used in the URL-free detail view)
   * @param {string} data.title             Title shown in the detail view
   * @param {string} data.image             Full image shown in the detail view
   * @param {string} [data.description]     Caption text under the detail image
   * @param {string[]} [data.categories]    For filtering, e.g. ["all", "bio"]
   * @param {string} [data.thumbnail]       Grid image, if different from `image` (e.g. a .gif)
   * @param {string} [data.hoverThumbnail]  Grid image to swap in on hover
   * @param {string} [data.caption]         Grid hover caption, if different from `title`
   * @param {string} [data.alt]             Alt text for the grid image, if different from `title`
   */
  constructor({
    id,
    title,
    image,
    description = "",
    categories = ["all"],
    thumbnail = image,
    hoverThumbnail = "",
    caption = title,
    alt = title,
  }) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.categories = categories;
    this.thumbnail = thumbnail;
    this.hoverThumbnail = hoverThumbnail;
    this.caption = caption;
    this.alt = alt;
  }

  /**
   * Builds the clickable grid tile:
   * <button class="img-container grid-item"><img><div class="caption"></div></button>
   * @returns {HTMLButtonElement}
   */
  toGridItem() {
    const button = document.createElement("button");
    button.className = "img-container grid-item";
    button.dataset.category = this.categories.join(" ");
    button.dataset.projectId = String(this.id);

    const img = document.createElement("img");
    img.src = this.thumbnail;
    img.alt = this.alt;

    if (this.hoverThumbnail) {
      button.addEventListener("mouseenter", () => (img.src = this.hoverThumbnail));
      button.addEventListener("mouseleave", () => (img.src = this.thumbnail));
    }

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = this.caption;

    button.append(img, caption);
    return button;
  }
}

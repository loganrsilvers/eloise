const projects = [
  {
    id: 1,
    title: "Nose",
    image: "img/art/nose.png",
    description: "Diversity in Medical Illustration: External Nose Anatomy on Roman Nose, 2025, Digitally Illustrated, 1080 x 1350 px."
  },
  {
    id: 2,
    title: "Castle",
    image: "img/art/castle.png",
    description: "Environmental Illustration: Dracula's Castle, 2023, Pen and ink digitally colored, 11 x 8.5 in."
  },
  {
    id: 3,
    title: "Sheep",
    image: "img/art/sheep.png",
    description: "Spot Illustration: Wool on Wool, 2023, Pen and Ink, 8 x 8 in."
  },
  {
    id: 4,
    title: "Comic",
    image: "img/art/comic.png",
    description: "Howling Page Edition Two: Are you Prepared?, featured in artist collaboration newspaper, 2026, Pen and Ink, 9 x 12 in."
  },
  {
    id: 5,
    title: "Pen PFP",
    image: "img/art/penpfp.png",
    description: "Spot Illustration: Pen Portrait, 2022, Pen and Ink, 9 x 12 in."
  },
  {
    id: 6,
    title: "Matcha",
    image: "img/art/matcha.png",
    description: "Spot Illustration: Matcha Elephant, 2024, Watercolor, 8 x 8 in."
  },
  {
    id: 7,
    title: "Eye",
    image: "img/art/eye.png",
    description: "Diversity in Medical Illustration: Tear Film Anatomy on Mono-lid, 2025, Digitally Illustrated, 1200 x 1800 px."
  },
  {
    id: 8,
    title: "Landscape Inked",
    image: "img/art/landscapeinked.png",
    description: "Environmental Illustration: Forest Robot, 2025, Pen and ink digitally colored, 9 x 12 in."
  },
  {
    id: 9,
    title: "Fire",
    image: "img/art/fire.png",
    description: "Environmental Illustration: Forest Fire Spirit, Pen and Ink Digitally Colored, 9 x 12 in."
  },
  {
    id: 10,
    title: "Bindweed",
    image: "img/art/plants/11.png",
    description: "Chicagoland invasive plants: Bindweed (Convolvulus arvensis), 2026, Watercolor pencil pen and ink, 9 x 12 in framed."
  },
  {
    id: 11,
    title: "Tree of Heaven",
    image: "img/art/plants/10.png",
    description: "Chicagoland invasive plants: Tree of Heaven (Ailanthus altissima), 2026, Watercolor pencil pen and ink, 9 x 12 in framed."
  },
  {
    id: 12,
    title: "Ear",
    image: "img/art/ear.png",
    description: "Diversity in Medical Illustration: External Ear Anatomy with piercings and deep skin-tone, 2025, Digitally Illustrated, 2048 x 2028 px."
  },
  {
    id: 13,
    title: "Metamorphosis",
    image: "img/art/metamorphosis.png",
    description: "Book cover design: The Metamorphosis, 2025, Pen and Ink, 9 x 12 in."
  },
  {
    id: 14,
    title: "Shooting from the Hip",
    image: "img/art/woman.png",
    description: "Spot Illustration: Shooting from the Hip, 2026, Pen and Ink with digital color."
  },
  {
    id: 15,
    title: "Warrior Inked",
    image: "img/art/warrorinked.png",
    description: "Spot Illustration: Faithful Paladin, 2025, Pen and Ink Digitally Colored, 8 x 8 in."
  },
  {
    id: 16,
    title: "Pillbug",
    image: "img/art/pillbug.png",
    description: "Mini Exhibition Piece: Pillbug Taxidermy Mini-Comic, 2023, Colored Pencil Pen and Ink, 3 x 6 in."
  },
  {
    id: 17,
    title: "Dandelion",
    image: "img/art/plants/9.png",
    description: "Chicagoland invasive plants: Dandelion (Taraxacum officinale), 2026, Watercolor pencil pen and ink, 9 x 12 in framed."
  }
];


let currentProjectIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const gridSection = document.getElementById("portfolio-grid");
  const projectView = document.getElementById("project-view");

  const projectTitle = document.getElementById("project-title");
  const projectImage = document.getElementById("project-image");
  const projectDescription = document.getElementById("project-description");

  const backToGridBtn = document.getElementById("back-to-grid");
  const prevProjectBtn = document.getElementById("prev-project");
  const nextProjectBtn = document.getElementById("next-project");



  // Click handlers for grid items
  gridSection.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("click", () => {
      const projectId = parseInt(item.getAttribute("data-project-id"), 10);
      const index = projects.findIndex(p => p.id === projectId);
      if (index !== -1) {
        currentProjectIndex = index;
        showProjectView();
      }
    });
  });

  // Back to grid
  backToGridBtn.addEventListener("click", () => {
    projectView.classList.add("hidden");
    gridSection.classList.remove("hidden");
    document.querySelector(".slideshow").classList.remove("hidden");
    document.querySelector(".portfolio-buttons").classList.remove("hidden");
  });

  // Previous project
  prevProjectBtn.addEventListener("click", () => {
    currentProjectIndex =
      (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjectDetails();
  });

  // Next project
  nextProjectBtn.addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjectDetails();
  });

  function showProjectView() {
    updateProjectDetails();
    gridSection.classList.add("hidden");
    projectView.classList.remove("hidden");
    document.querySelector(".slideshow").classList.add("hidden");
    document.querySelector(".portfolio-buttons").classList.add("hidden");
    document.body.style.overflow = ""; 
  }

  // In back-to-grid handler:
backToGridBtn.addEventListener("click", () => {
  projectView.classList.add("hidden");
  gridSection.classList.remove("hidden");
  document.querySelector(".slideshow").classList.remove("hidden");
  document.querySelector(".portfolio-buttons").classList.remove("hidden");
  document.body.style.overflow = ""; // restore scroll
});

  function updateProjectDetails() {
    const project = projects[currentProjectIndex];
    projectTitle.textContent = project.title;
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectDescription.textContent = project.description;
  }
});

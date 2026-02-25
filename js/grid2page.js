const projects = [
  {
    id: 1,
    title: "Nose",
    image: "img/art/nose.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec."
  },
  {
    id: 2,
    title: "Sheep",
    image: "img/art/sheep.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue."
  },
  {
    id: 3,
    title: "comic",
    image: "img/art/comic.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum in, dolor. Pellentesque facilisis, nulla imperdiet fermentum."
  },
  {
    id: 4,
    title: "Castle",
    image: "img/art/castle.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur at lacus ac velit ornare lobortis."
  },
  {
    id: 5,
    title: "Pen PFP",
    image: "img/art/penpfp.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus."
  },
  {
    id: 6,
    title: "Large-flowered Tickseed, Coreopsis grandiflora",
    image: "img/art/plants/1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus. Vivamus elementum semper nisi."
  },
  {
    id: 7,
    title: "Goldenrod, Solidago",
    image: "img/art/plants/6.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu."
  },
  {
    id: 8,
    title: "Eye",
    image: "img/art/eye.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero."
  },
  {
    id: 9,
    title: "Matcha",
    image: "img/art/matcha.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."
  },
  {
    id: 10,
    title: "Landscape Inked",
    image: "img/art/landscapeinked.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum felis eu pede mollis pretium. Integer tincidunt."
  },
  {
    id: 11,
    title: "Fire",
    image: "img/art/fire.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
  },
  {
    id: 12,
    title: "Foxglove Beardtongue, Penstemon digitalis",
    image: "img/art/plants/2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
  },
  {
    id: 13,
    title: "Red Columbine (Aquilegia canadensis)",
    image: "img/art/plants/7.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec odio et ante tincidunt tempus. Donec pede justo, fringilla vel."
  },
  {
    id: 14,
    title: "plants",
    image: "img/art/plants/11.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies mi eu turpis hendrerit fringilla."
  },
  {
    id: 15,
    title: "Ear",
    image: "img/art/ear.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat pretium libero. Cras id dui."
  },
  {
    id: 16,
    title: "Goat Inked",
    image: "img/art/goatinked.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus."
  },
  {
    id: 17,
    title: "Metamorphosis",
    image: "img/art/metamorphosis.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
  },
  {
    id: 18,
    title: "Swamp milkweed, Asclepias incarnata",
    image: "img/art/plants/3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
  },
  {
    id: 19,
    title: "New England Aster (Symphyotrichum novae-angliae)",
    image: "img/art/plants/8.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."
  },
  {
    id: 20,
    title: "plants",
    image: "img/art/plants/10.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra nulla ut metus varius laoreet."
  },
  {
    id: 21,
    title: "Deerbat",
    image: "img/art/deerbat.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."
  },
  {
    id: 22,
    title: "Robot",
    image: "img/art/robot.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper ultricies nisi. Nam eget dui."
  },
  {
    id: 23,
    title: "Warrior Inked",
    image: "img/art/warrorinked.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus."
  },
  {
    id: 24,
    title: "Pillbug",
    image: "img/art/pillbug.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
  },
  {
    id: 25,
    title: "Anise hyssop (Agastache foeniculum)",
    image: "img/art/plants/4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
  },
  {
    id: 26,
    title: "Black-eyed Susan (Rudbeckia hirta)",
    image: "img/art/plants/5.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat massa quis enim. Donec pede justo, fringilla vel."
  },
  {
    id: 27,
    title: "plants",
    image: "img/art/plants/9.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu."
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
  }

  function updateProjectDetails() {
    const project = projects[currentProjectIndex];
    projectTitle.textContent = project.title;
    projectImage.src = project.image;
    projectImage.alt = project.title;
    projectDescription.textContent = project.description;
  }
});

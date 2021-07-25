const modules = [
  { 
    image: './assets/Tomb-of-horrors copy.jpg',
    title: 'Tomb of Horrors',
    likes: 02,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/170945/S14-Dungeons-of-Dread-1e',
    levels: '10 - 14',
    code: 'S1' 
  },
  { 
    image: './assets/the-lost-city copy.jpg',
    title: 'The Lost City',
    likes: 18,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17084/B4-The-Lost-City-Basic',
    levels: '1 - 3',
    code: 'B4'
  },
  { 
    image: './assets/castle-amber copy.jpg',
    title: 'Castle Amber',
    likes: 12,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17088/X2-Castle-Amber-Basic',
    levels: '3 - 6',
    code: 'X2' 
  },
  { 
    image: './assets/expedition-to-the-barrier-peaks copy.jpg',
    title: 'Expedition to the Barrier Peaks',
    likes: 04,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17065/S3-Expedition-to-the-Barrier-Peaks-1e',
    levels: '8 - 12',
    code: 'S3' 
  },
  { 
    image: './assets/village-of-hommlet copy.jpg',
    title: 'The Village of Hommlet',
    likes: 05,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17067/T1-The-Village-of-Hommlet-1e',
    levels: '1 - 3',
    code: 'T1' 
  },
  { 
    image: './assets/keep-on-the-borderlands copy.jpg',
    title: 'The Keep on the Borderlands',
    likes: 10,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17158/B2-The-Keep-on-the-Borderlands-Basic',
    levels: '1 - 3',
    code: 'B2' 
  },
  { 
    image: './assets/dwellers-of-the-forbidden-city copy.jpg',
    title: 'Dwellers of the Forbidden City',
    likes: 06,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17046/I1-Dwellers-of-the-Forbidden-City-1e',
    levels: '4 - 7',
    code: 'I1' 
  },
  { 
    image: './assets/lost-caverns-of-tsojcanth copy.jpg',
    title: 'The Lost Caverns of Tsojcanth',
    likes: 08,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/17066/S4-The-Lost-Caverns-of-Tsojcanth-1e',
    levels: '6 - 10',
    code: 'S4' 
  }
];

const displayArea = document.querySelector('.module-container');

window.addEventListener('load', loadModules);

function loadModules() {
  modules.forEach(module => {
    displayArea.innerHTML += `
    <div class="card">
    <section class="article-head" style="background-image: url(${module.image})">
    </section>
    <section class="article-body">
      <h3 class="mod-title">${module.title}</h3>
      <p class="date-display">${module.date}</p>
        <div class="mod-link">
          <a class="weblink" href="${module.link}">${module.link}</a>
        </div>
      <p class="mod-level">Character levels ${module.levels}</p>
      <p class="mod-code">Module ${module.code}</p>
    </section>
    </div>
    `
  });
};
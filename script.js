const modules = [
  { image: './assets/Tomb-of-horrors copy.jpg',
    title: 'Tomb of Horrors',
    likes: 02,
    date: 'Saturday 07/24/21 8:00pm',
    link: 'https://www.drivethrurpg.com/product/170945/S14-Dungeons-of-Dread-1e',
    levels: '10 - 14',
    code: 'S1' 
  },
  { image: './assets/the-lost-city copy.jpg',
  title: 'The Lost City',
  likes: 18,
  date: 'Saturday 07/24/21 8:00pm',
  link: 'https://www.drivethrurpg.com/product/17084/B4-The-Lost-City-Basic',
  levels: '1 - 3',
  code: 'B4' 
}
];

const displayArea = document.querySelector('.module-container');

window.addEventListener('load', loadModules);

function loadModules() {
  modules.forEach(module => {
    displayArea.innerHTML += `
    <section class="article-head" style="background-image: url(${modules.image})">
    </section>
    <section class="article-body">
      <h3 class="mod-title">${modules.name}</h3>
      <p class="date-display">${modules.date}</p>
        <div class="mod-link">
          <a class="weblink" href="${modules.link}"></a>
    </section>
    `
  })
}
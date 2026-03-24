const projects = [
  [
    'PROJECT 1',
    '<b>Title</b> Sehr wichtiges Projekt mit sehr wichtigem Foto',
    'https://picsum.photos/400/600?random',
  ],
  [
    'PROJECT 2',
    '<b>Schrüberift</b>Wehr sehr michtige Prejokter.',
    './assets/DGGlille.png',
  ],
];

let n = 0;

pul = document.getElementById('projectslist');
pex = document.getElementById('projecttext');
pim = document.getElementById('projectimage');

for (let p of projects) {
  n += 1;
  console.log(p);
  let pli = document.createElement('li');
  pli.classList.add('py-6', 'cursor-crosshair');
  pli.id = `p${n}`;
  pli.innerText = p[0];

  pli.addEventListener('click', () => {
    console.log(`Clicked on ${p[0]}`);
    pex.innerHTML = p[1];
    pim.innerHTML = `<img
              id="portfolio02"
              src=${p[2]}
              alt=""
           
            />`;
  });
  pul.appendChild(pli);
}

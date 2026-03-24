function handleHover01() {
  document.getElementById('portfolio01').classList.toggle('hidden');
}

pf01 = document.getElementById('portfolio01text');
pf02 = document.getElementById('portfolio02text');
pf03 = document.getElementById('portfolio03text');

pf01.addEventListener('mouseover', (event) => {
  // highlight the mouseover target
  event.target.style.color = 'blue';
  document.getElementById('portfolio01').classList.toggle('hidden');
});

pf01.addEventListener('mouseout', (event) => {
  event.target.style.color = 'black';
  document.getElementById('portfolio01').classList.toggle('hidden');
});

pf02.addEventListener('mouseover', (event) => {
  // highlight the mouseover target
  event.target.style.color = 'blue';
  document.getElementById('portfolio02').classList.toggle('hidden');
});

pf02.addEventListener('mouseout', (event) => {
  event.target.style.color = 'black';
  document.getElementById('portfolio02').classList.toggle('hidden');
});

pf03.addEventListener('mouseover', (event) => {
  // highlight the mouseover target
  event.target.style.color = 'blue';
  document.getElementById('portfolio03').classList.toggle('hidden');
});

pf03.addEventListener('mouseout', (event) => {
  event.target.style.color = 'black';
  document.getElementById('portfolio03').classList.toggle('hidden');
});

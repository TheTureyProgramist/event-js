const modalClose = document.querySelector('[data-action="close-model"]');
const backdrop = document.querySelector('.backdrop');
const modalOpen = document.querySelector('[data-action="open-modal"]');
function modal() {
  document.body.classList.toggle('show-modal');
}
modalOpen.addEventListener('click', modal);
modalClose.addEventListener('click', modal);
backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop) modal();
});

const buttonsRadio = document.querySelectorAll('input[name="color"]');
for (let i = 0; i < buttonsRadio.length; i++) {
  let radio = buttonsRadio[i];
  radio.addEventListener('change', function (event) {
    document.body.style.backgroundColor = event.target.value;
  });
}

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', () => {
  output.textContent = input.value ? input.value : 'no name';
});

const validation = document.querySelector('#validation-input');
validation.addEventListener('blur', () => {
  const isValid = validation.value.length === parseInt(validation.getAttribute('data-length'));
  validation.classList.toggle('valid', isValid);
  validation.classList.toggle('invalid', !isValid);
});

const controlFont = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
controlFont.addEventListener('input', () => {
  text.style.fontSize = `${controlFont.value}vw`;
});
const gallery = document.querySelector('.gallery');
let index = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    index += (e.key === 'ArrowRight' ? 1 : -1);
    index = (index + gallery.children.length) % gallery.children.length;
  }
  gallery.style.transform = `translateX(-${index * 1}vw)`;
});

const inputNumber = document.querySelector('#input-number');
const createButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');
createButton.addEventListener('click', () => {
  const amount = Number(inputNumber.value);
  createBoxes(amount);
});
destroyButton.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  destroyBoxes(); 
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
  }
  boxesContainer.appendChild(fragment);
}
function getRandomColor() {
 const red = Math.random() * ((250 - 0) + 0)
const green = Math.random() * ((250 - 0) + 0)
const blue = Math.random() * ((250 - 0) + 0)
    return `rgb(${red}, ${green}, ${blue})`
}
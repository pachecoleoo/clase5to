// ==========================================================
// AULA LAB — JavaScript para mostrar en clase de 5.º año
// Probá modificar los textos, emojis y colores de este archivo.
// ==========================================================

// 1) SELECCIONAR ELEMENTOS DEL HTML
// document.getElementById() busca un elemento por su id.
const form = document.getElementById('greetingForm');
const nameInput = document.getElementById('nameInput');
const preview = document.getElementById('preview');
const previewTitle = document.getElementById('previewTitle');
const previewDescription = document.getElementById('previewDescription');
const previewEmoji = document.getElementById('previewEmoji');
const themeToggle = document.getElementById('themeToggle');
const colorButtons = document.querySelectorAll('.color-dot');

// 2) VARIABLES Y OBJETOS
// Guardamos las opciones de color en un objeto de JavaScript.
const colors = {
  violet: { hex: '#a991ff', emoji: '🚀', message: '¡Tenés todo para crear algo increíble!' },
  cyan:   { hex: '#6de3ee', emoji: '🌊', message: '¡Tus ideas no tienen límites!' },
  orange: { hex: '#ffad75', emoji: '🔥', message: '¡Hoy empieza tu próximo gran proyecto!' },
  pink:   { hex: '#ff87bc', emoji: '💖', message: '¡La creatividad está de tu lado!' }
};
let selectedColor = 'violet'; // let: esta variable puede cambiar.

// 3) EVENTOS DE CLIC
// Cuando el usuario toca un círculo, cambiamos el color elegido.
colorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedColor = button.dataset.color;
    colorButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    preview.style.setProperty('--chosen', colors[selectedColor].hex);
  });
});

// 4) FUNCIONES + CONDICIONALES
// El evento submit ocurre al presionar el botón del formulario.
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impide que la página se recargue.
  const name = nameInput.value.trim(); // Quita espacios al inicio y final.

  // Un condicional controla que se haya ingresado un nombre.
  if (name === '') {
    nameInput.focus();
    return;
  }

  const option = colors[selectedColor];
  // textContent modifica el texto de un elemento de forma segura.
  previewTitle.textContent = `¡Hola, ${name}!`;
  previewDescription.textContent = option.message;
  previewEmoji.textContent = option.emoji;
  preview.style.setProperty('--chosen', option.hex);

  // Una animación simple para remarcar el cambio.
  previewEmoji.animate(
    [{ transform: 'scale(.7) rotate(-15deg)' }, { transform: 'scale(1.18) rotate(8deg)' }, { transform: 'scale(1)' }],
    { duration: 480, easing: 'ease-out' }
  );
});

// 5) CAMBIAR EL TEMA CON UNA CLASE CSS
// La clase .light está definida al final de styles.css.
themeToggle.addEventListener('click', () => {
  const lightMode = document.body.classList.toggle('light');
  themeToggle.innerHTML = lightMode ? '☾ <span>Tema</span>' : '☀ <span>Tema</span>';
  themeToggle.setAttribute('aria-label', lightMode ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
});

// Para probar en clase: abrí la consola del navegador con F12.
console.log('🚀 Aula Lab está funcionando. ¡Bienvenidos al mundo del desarrollo web!');

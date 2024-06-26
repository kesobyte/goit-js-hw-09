function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const stopBtn = document.querySelector('button[data-stop]');
const startBtn = document.querySelector('button[data-start]');

let colorChangeInterval = null;
stopBtn.disabled = true;

function startColorChange() {
  colorChangeInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
}

function stopColorChange() {
  clearInterval(colorChangeInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

//Event Listener
startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

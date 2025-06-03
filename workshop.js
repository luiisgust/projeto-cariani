const counterEl = document.getElementById('cont');
const buttonEl = document.getElementById('enviar');
let count = 40;
buttonEl.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterEl.textContent = count;
        if (count === 0) {
            buttonEl.disabled = true;
        }
    }
});
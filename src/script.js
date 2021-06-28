function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickA(e) {
    const audio = document.querySelector(`audio[data-key="65"]`);
    const key = document.querySelector(`.key[data-key="65"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickS(e) {
    const audio = document.querySelector(`audio[data-key="83"]`);
    const key = document.querySelector(`.key[data-key="83"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickD(e) {
    const audio = document.querySelector(`audio[data-key="68"]`);
    const key = document.querySelector(`.key[data-key="68"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickF(e) {
    const audio = document.querySelector(`audio[data-key="70"]`);
    const key = document.querySelector(`.key[data-key="70"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickG(e) {
    const audio = document.querySelector(`audio[data-key="71"]`);
    const key = document.querySelector(`.key[data-key="71"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickH(e) {
    const audio = document.querySelector(`audio[data-key="72"]`);
    const key = document.querySelector(`.key[data-key="72"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickJ(e) {
    const audio = document.querySelector(`audio[data-key="74"]`);
    const key = document.querySelector(`.key[data-key="74"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickK(e) {
    const audio = document.querySelector(`audio[data-key="75"]`);
    const key = document.querySelector(`.key[data-key="75"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function playClickL(e) {
    const audio = document.querySelector(`audio[data-key="76"]`);
    const key = document.querySelector(`.key[data-key="76"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

let aKey = document.querySelector("#A");
aKey.addEventListener("click", playClickA);

let sKey = document.querySelector("#S");
sKey.addEventListener("click", playClickS);

let dKey = document.querySelector("#D");
dKey.addEventListener("click", playClickD);

let fKey = document.querySelector("#F");
fKey.addEventListener("click", playClickF);

let gKey = document.querySelector("#G");
gKey.addEventListener("click", playClickG);

let hKey = document.querySelector("#H");
hKey.addEventListener("click", playClickH);

let jKey = document.querySelector("#J");
jKey.addEventListener("click", playClickJ);

let kKey = document.querySelector("#K");
kKey.addEventListener("click", playClickK);

let lKey = document.querySelector("#L");
lKey.addEventListener("click", playClickL);
let beatKeys = document.querySelector('#beat-keys');

const keys = {
    'K': 'kick',
    'S': 'snare',
    'H': 'hit',
    'C': 'drum',
    'B': 'hat'
};


for (let key in keys) {
    const button = document.createElement('button');
    button.textContent = key;
    button.className = 'rounded-md bg-red-400 p-4 m-2 hover:bg-red-500';
    beatKeys.appendChild(button);
}


const playSound = (key) => {
    const audio = new Audio(`./sounds/${keys[key]}.wav`);
    audio.play();
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (keys[key]) {
        playSound(key);
    }
});
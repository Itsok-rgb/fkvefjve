const box = document.getElementById('chocolateBox');
const surpriseArea = document.getElementById('surpriseArea');
const surpriseText = document.getElementById('surpriseText');

const surprises = [
    "I promise to always share my last piece of chocolate with you, Jaan.",
    "Just like chocolate, life is better when it's shared with you!",
    "Virtual Treat: 🍫🍫🍫 (Redeemable for real ones next time we meet!)",
    "I love you more than all the chocolate in the world!"
];

let currentSurprise = 0;

// 1. Create Floating Chocolates
function createFlakes() {
    const icons = ['🍫', '🍩', '🍪', '❤️'];
    for (let i = 0; i < 20; i++) {
        let flake = document.createElement('div');
        flake.className = 'flake';
        flake.innerText = icons[Math.floor(Math.random() * icons.length)];
        flake.style.left = Math.random() * 100 + 'vw';
        flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        flake.style.opacity = Math.random();
        document.querySelector('.chocolate-bg').appendChild(flake);
    }
}

// 2. Open Box Logic
box.addEventListener('click', () => {
    const lid = document.querySelector('.lid');
    lid.style.transform = 'translateY(-150px) rotate(-10deg)';
    lid.style.opacity = '0';
    
    setTimeout(() => {
        box.style.display = 'none';
        surpriseArea.classList.remove('hidden');
        revealNext();
    }, 600);
});

// 3. Cycle through surprises
function revealNext() {
    if (currentSurprise < surprises.length) {
        surpriseText.innerText = surprises[currentSurprise];
        currentSurprise++;
    } else {
        surpriseText.innerText = "Every day is Chocolate Day with you, Jaan! ❤️";
        document.querySelector('button').style.display = 'none';
    }
}

createFlakes();

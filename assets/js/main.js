
//Preloader with the doge coin
window.onload = function () {
    window.setTimeout(fadeout, 500);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}


//Sticky navbar and back to top btn
window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;

    var navbar = document.querySelector('.navbar-brand')
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }

    var backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "flex";
    } else {
        backToTo.style.display = "none";
    }
};

//Init wow
new WOW().init();

//Coin rain
const coinCanvasContainer = document.getElementById('coinCanvasContainer');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// Get the height of the hero section
const heroSection = document.getElementById('home');
const heroSectionHeight = heroSection.clientHeight;

canvas.width = window.innerWidth;
canvas.height = heroSectionHeight;


const coinImage = new Image();
coinImage.src = 'assets/images/Dogecoin_Logo.png';

const coins = [];

function Coin(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
}

Coin.prototype.update = function () {
    this.y += this.speed;
    if (this.y > canvas.height) {
        this.y = -coinImage.height;
    }
};

Coin.prototype.draw = function () {
    ctx.drawImage(coinImage, this.x, this.y);
};

function createCoins() {
    for (let i = 0; i < 80; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 5 + 1;
        coins.push(new Coin(x, y, speed));
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coins.forEach(coin => {
        coin.update();
        coin.draw();
    });
    requestAnimationFrame(update);
}

createCoins();
update();

coinCanvasContainer.appendChild(canvas);


//Dogememe words
const dogeText = document.createElement('p');
dogeText.id = 'dogeText';
document.getElementById('dogeMeme').appendChild(dogeText);

function animateDogeText() {
    const phrases = [
        'Much Gain.',
        'Much wow.',
        'So Doge.',
        'Many coins.',
        'Very crypto.',
        'Wow.',
        'Very reward.',
        'Such mining',
        "Many NFTs, much mining power!",
        "So NFT, very miner!",
        "Such ownership, much hash power!",
        "Many NFTs, wow mining!",
        "So Doge, very NFT!",
        "Much NFT, many coins!",
        "So ownership, much mining!",
        "Many NFTs, much wow!",
        "Such NFT, very miner!",
        "So Doge, much hash power!"
    ];

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const randomSize = Math.floor(Math.random() * 20) + 26;

    dogeText.textContent = randomPhrase;
    dogeText.style.opacity = 1;
    dogeText.style.left = randomX + '%';
    dogeText.style.top = randomY + '%';
    dogeText.style.color = randomColor;
    dogeText.style.fontSize = randomSize + 'px';
    dogeText.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

}
setInterval(animateDogeText, 2000);


document.addEventListener('DOMContentLoaded', function () {
    const coin = document.querySelector('.coin');

    // Set a random delay and height for each coin
    const delay = Math.random() * 5;

    // Apply the delay, starting position, and rotation to the coin
    coin.style.animationDelay = `${delay}s`;
});


//Dogefeature dogememe
const spans = document.querySelectorAll('.dogefeatures span');

function changeStyle() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];

    spans.forEach(span => {
        span.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
}

setInterval(changeStyle, 3000);

//mobile-menu-btn
let navbarToggler = document.querySelector(".mobile-menu-btn");
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
});

// for menu scroll 
var pageLink = document.querySelectorAll('.page-scroll');

pageLink.forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
        });
    });
});

// section menu active
function onScroll(event) {
    var sections = document.querySelectorAll('.page-scroll');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    for (var i = 0; i < sections.length; i++) {
        var currLink = sections[i];
        var val = currLink.getAttribute('href');
        var refElement = document.querySelector(val);
        var scrollTopMinus = scrollPos + 73;
        if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
            document.querySelector('.page-scroll').classList.remove('active');
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    }
};

window.document.addEventListener('scroll', onScroll);
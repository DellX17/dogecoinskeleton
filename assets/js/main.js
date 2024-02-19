
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
canvas.height = heroSectionHeight; // Set the canvas height to the height of the hero section


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
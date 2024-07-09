const lenis = new Lenis({
    // Valeur entre 0 et 1
    // Valeur par défaut : 0,1
    // Plus la valeur est faible, plus le scroll sera fluide
    lerp: 0.05, 
    // Valeur par défaut : 1
    // Plus la valeur est haute, plus le défilement sera rapide 
    wheelMultiplier: 1, 
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  

// Update progress bar on scroll
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
}

updateProgressBar(); // Initial call to set the progress bar width



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#14b32f",
"#12a12e",
"#11902d",
"#0f7e2c",
"#0e6d2b",
"#0c5b2a",
"#0b4a29",
"#093828",
"#082727",
"#061526",
"#050d25",
"#071424",
"#081b23",
"#092222",
"#0a2921",
"#0b3020",
"#0c371f",
"#0d3e1e",
"#0f451d",
"#104c1c",
"#11531b",
"#050d18"
]

let mouseMoving = false;
let timer;

circles.forEach(function (circle, index) {
circle.x = 0;
circle.y = 0;
circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
coords.x = e.clientX;
coords.y = e.clientY;
mouseMoving = true;
clearTimeout(timer);

circles.forEach(circle => {
    circle.style.opacity = 1;
});

timer = setTimeout(() => {
    mouseMoving = false;
    circles.forEach(circle => {
    circle.style.opacity = 0;
    });
}, 100);
});

function animateCircles() {
let x = coords.x;
let y = coords.y;

circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (circles.length - index) / (circles.length);

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);
}

animateCircles();

// console.log("Hello")
function goGallery() {
    window.location.href = '/gallery'; 
}

function goHome() {
        window.location.href = '/'; // Adjust the URL as needed
    }

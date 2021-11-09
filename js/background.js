const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.body.style;

bgImage.backgroundRepeat = "no-repeat";
bgImage.backgroundImage = `url('img/${chosenImage}')`;
bgImage.backgroundSize = "100vw 100vh";
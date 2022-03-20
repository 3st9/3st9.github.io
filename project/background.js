const images = ["0.gif", "1.gif", "2.gif","3.gif","4.gif","5.gif","6.gif","7.gif","8.gif","9.gif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
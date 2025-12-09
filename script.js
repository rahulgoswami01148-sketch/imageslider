
let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg"
];

let currentIndex = 0;

let slider = document.getElementById("sliderImage");

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }

    slider.src = images[currentIndex];
}

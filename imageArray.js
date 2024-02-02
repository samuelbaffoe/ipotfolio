const imageArray = [
    'images/image1.jpeg',
    'images/image2.jpg',
    'images/image3.jpg'
];
const displayedImage = document.getElementById('displayedImage');
const changeImageButton = document.getElementById('changeImageButton');
const prevImageButton = document.getElementById('prevImageButton');
const nextImageButton = document.getElementById('nextImageButton');
let currentIndex = 0;
function changeImage() {
    displayedImage.src = imageArray[currentIndex];
    currentIndex = (currentIndex + 1) % imageArray.length;
}
function prevImage() {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    changeImage();
}
function nextImage() {
    currentIndex = (currentIndex + 1) % imageArray.length;
    changeImage();
}
changeImageButton.addEventListener('click', changeImage);
prevImageButton.addEventListener('click', prevImage);
nextImageButton.addEventListener('click', nextImage);

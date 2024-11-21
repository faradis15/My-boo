let currentImageIndex = 0;
const images = [
    './path/image1.jpg',
    './path/image2.jpg',
    './path/image3.jpg',
];
const carouselImage = document.getElementById('carouselImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
function updateImage() {
    carouselImage.src = images[currentImageIndex];
}
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1; // Mengatur indeks ke gambar terakhir jika sudah di awal
    updateImage();
});
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1; // Mengatur indeks ke gambar pertama jika sudah di akhir
    updateImage();
});
updateImage();
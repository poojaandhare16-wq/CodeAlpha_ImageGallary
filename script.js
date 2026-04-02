let currentIndex = 0;
let images = document.querySelectorAll(".gallery-item");

/* Open Lightbox */
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    images = Array.from(document.querySelectorAll(".gallery-item")).filter(img => img.style.display !== "none");

    currentIndex = images.indexOf(img);

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

/* Close Lightbox */
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* Next Image */
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* Previous Image */
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* Filter Images */
function filterImages(category) {
    const allImages = document.querySelectorAll(".gallery-item");

    allImages.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
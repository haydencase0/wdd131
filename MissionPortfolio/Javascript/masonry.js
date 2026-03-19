const grid = document.querySelector('.grid');

const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
});

const images = [
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg",
    "../images/SceneryPics/TokyoTemple.jpg"
];

images.forEach(src => {
    const item = document.createElement("div");
    item.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = src;

    item.appendChild(img);
    grid.appendChild(item);
});

// Re-layout AFTER images load
imagesLoaded(grid, function () {
    new Masonry(grid, {
        itemSelector: '.grid-item',
        percentPosition: true
    });
});
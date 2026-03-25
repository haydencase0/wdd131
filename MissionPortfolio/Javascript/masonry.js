const grid = document.querySelector('.grid');

const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
});
const gallery = [
    {
        image: "../images/SceneryPics/TokyoTemple.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/carmountain.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/cloudyfuji.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/gifucastle.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/kanayamashrine.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/nagoyacastle.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/nagoyasakura.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/nagoyaskyline.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/nakedfuji.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/numazubeach.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/numazuskyline.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/shinkansen.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/shizuokanight.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/SceneryPics/suwasakura.jpg",
        description: "Front of Tokyo Temple",
        tags: ["Scenery"]
    },
    {
        image: "../images/PeoplePics/20birthday.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/christmascaroling.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/dagangatyakiniku.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/eldercook.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/filipinobrothers.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/finalzoneconf.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/hurdle.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/moore.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/morrow.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/mountainwmorrill.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/muranaka.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/ouchi.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/petersen.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/riosanddugar.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/saunders.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/suwayoungmen.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/takabataward.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/thompson.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/toro.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/welcometojapan.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    },
    {
        image: "../images/PeoplePics/dagangatyakiniku.jpg",
        description: "Front of Tokyo Temple",
        tags: ["People"]
    }
]
/*
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
*/

function loadGallery(filterTag) {
    grid.innerHTML = "";

    const filtered = gallery.filter(item => 
        !filterTag || item.tags.includes(filterTag)
    );

    filtered.forEach(itemData => {
        const item = document.createElement("div");
        item.classList.add("grid-item");

        const img = document.createElement("img");
        img.src = itemData.image;

        // 👇 CLICK EVENT FOR MODAL
        img.addEventListener("click", () => {
            openModal(itemData.image, itemData.description);
        });

        item.appendChild(img);
        grid.appendChild(item);
    });

    imagesLoaded(grid, function () {
        masonry.reloadItems();
        masonry.layout();
    });
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const closeBtn = document.getElementById("close");

function openModal(src, caption) {
    modal.classList.add("active");
    modalImg.src = src;
    modalCaption.textContent = caption;
}

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Optional: click outside to close
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

const page = window.location.pathname;

if (page.includes("index")){
    loadGallery();
}
if (page.includes("people")) loadGallery("people");
if (page.includes("food")) loadGallery("food");
if (page.includes("scenery")) loadGallery("places");
// images.forEach(src => {
//     const item = document.createElement("div");
//     item.classList.add("grid-item");

//     const img = document.createElement("img");
//     img.src = src;

//     item.appendChild(img);
//     grid.appendChild(item);
// });

// Re-layout AFTER images load
// imagesLoaded(grid, function () {
//     new Masonry(grid, {
//         itemSelector: '.grid-item',
//         percentPosition: true
//     });
// });
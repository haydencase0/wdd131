
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
        document.querySelector("h1").style.color = "blue";
        document.querySelector("p").style.color = "blue";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
        document.querySelector("h1").style.color = "green";
        document.querySelector("p").style.color = "green";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
        document.querySelector("h1").style.color = "#C75A00";
        document.querySelector("p").style.color = "#C75A00";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
        document.body.style.backgroundImage = "url('" + document.getElementById("logo").getAttribute("src") + "')";
        document.getElementById("logo").style.display = "none";
        document.querySelector("h1").style.color = "white";
        document.querySelector("p").style.color = "white";
    }
}
          
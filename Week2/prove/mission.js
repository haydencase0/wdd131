let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#2e3035";
        document.getElementById("content").style.color = "white";
        document.querySelector("img").src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.getElementById("content").style.color = "black";
        document.querySelector("img").src = "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp"
    }
}           
                    
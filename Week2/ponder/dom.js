let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    
    if (codeValue === 'html'){
        document.getElementById("html").style.backgroundColor = "darkgrey";
        document.getElementById("js").style.backgroundColor = "lightgrey";
        document.getElementById("css").style.backgroundColor = "lightgrey";
        document.querySelector("li").textContent = "This is where the HTML explanation would be if we had one.";
    }
    if (codeValue === "css"){
        document.getElementById("css").style.backgroundColor = "lightblue";
        document.getElementById("html").style.backgroundColor = "lightgrey";
        document.getElementById("js").style.backgroundColor = "lightgrey";
    }
    if (codeValue === 'js'){
        document.getElementById("js").style.backgroundColor = "yellow";
        document.getElementById("html").style.backgroundColor = "lightgrey";
        document.getElementById("css").style.backgroundColor = "lightgrey";
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is fully loaded');
});
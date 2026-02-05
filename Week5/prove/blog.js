const allRatingElems = document.querySelectorAll('article.book p span');

allRatingElems.forEach((elem) => {
    elem.setAttribute('aria-label', `${elem.innerText.length} out of 5 stars`);
});
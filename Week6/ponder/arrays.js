const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
]; // give student a grade

students.foreach((student, index) => {

});

const ul = queryS
let html = '';
words.forEach((word) =>{
    html+= `<li>${word}</li>`;
});
ul.innerHTML = html;

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          
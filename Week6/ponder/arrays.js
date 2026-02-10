const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'C'},
    {last: 'Tanda', first: 'Tamanda', grade: 'D'}
]; // give student a grade

const ulword = document.querySelector('#words');
const ulname = document.querySelector('#name');
const ulgrade = document.querySelector('#grade');
const average = document.querySelector('#average');

let html = '';
words.forEach((word) =>{
    html += `<li>${word}</li>`;
});
ulword.innerHTML = html;

html = '';
students.forEach((student) =>{
    html += `<li>${student.first} ${student.last}</li>`;
});
ulname.innerHTML = html;

html = '';
students.forEach(student => {
    html += `<li>${student.grade}</li>`;
});
ulgrade.innerHTML = html;

let avg = students.reduce((total, student) => total += convert(student.grade), 0);
average.innerHTML = `The average grade score for all students is: ${(avg/students.length).toFixed(2)}`;

function convert(grade) {
    let points = 0;
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
          
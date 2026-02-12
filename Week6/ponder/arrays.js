const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'C'},
    {last: 'Tanda', first: 'Tamanda', grade: 'D'}
]; // give student a grade

const ulword = document.querySelector('#words');
const studentList = document.querySelector('#student-list');
const average = document.querySelector('#average p');

let html = '';
words.forEach((word) =>{
    const li = document.createElement('li');
    li.textContent = word;
    ulword.appendChild(li);
});

students.forEach(student => {
    console.log(student);
    html += `
        <li class="student-row">
        <span class="student-name">${student.first} ${student.last}</span>
        <span class="student-grade">${student.grade}</span>
        </li>`;
});
studentList.innerHTML = html;

let avg = students.reduce((total, student) => total += convert(student.grade), 0);
console.log(students.reduce((total, student) => total += convert(student.grade), 0));
console.log(avg/students.length);
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
          
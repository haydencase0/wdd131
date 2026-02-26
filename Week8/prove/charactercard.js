const attackedButton = document.querySelector('#attacked');
const levelButton = document.querySelector('#levelup');
const resetButton = document.querySelector('#reset');
const health = document.querySelector('#health');
const level = document.querySelector('#level');
let healthAmount = 100;
let levelTotal = 1;

attackedButton.addEventListener('click', () => {
    let tempHealth = healthAmount;
    if(healthAmount > 0){
        healthAmount -= Math.floor(Math.random() * 20) + 1;
        health.innerHTML = `Health: ${healthAmount}`;
    } 
    if(tempHealth - healthAmount <= 10){
        levelTotal += 1;
        level.innerHTML = `Level: ${levelTotal}`;
    }
    if(healthAmount <= 0) {
        health.innerHTML = "Health: You Are Dead";
    }
});

levelButton.addEventListener('click', () => {
    if(healthAmount > 0){
        levelTotal += 1;
        level.innerHTML = `Level: ${levelTotal}`;
    }
});

resetButton.addEventListener('click', ()=>{
    healthAmount = 100;
    health.innerHTML = `Health: ${healthAmount}`;
    levelTotal = 1;
    level.innerHTML = `Level: ${levelTotal}`;
});
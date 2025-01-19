let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
   level++;
   userSeq = [];
   h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * btns.length);

   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);

   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000); 
        }
    } else{
        h2.innerHTML = `Game Over!Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1)
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =  false;
    gameSeq = [];
     userSeq = [];
     level = 0;
}

// Add sound files
const sounds = {
    red: new Audio('red.mp3'),
    yellow: new Audio('yellow.mp3'),
    blue: new Audio('blue.mp3'),
    purple: new Audio('purple.mp3')
};

// Function to play sound
function playSound(color) {
    sounds[color].play();
}

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.id;
        playSound(color);
        // ...existing code to handle button click...
    });
});

// Function to add flash effect
function flashButton(color) {
    const button = document.getElementById(color);
    button.classList.add('flash');
    setTimeout(() => {
        button.classList.remove('flash');
    }, 200);
}
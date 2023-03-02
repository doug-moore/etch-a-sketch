let color = 'black';
let click = false;
// //populate board

document.querySelector('body').addEventListener('click', function(e){
    if (e.target.tagName != 'BUTTON'){
        click = !click;
        let draw = document.querySelector('#draw');
        if (click){
            draw.innerHTML = 'You Can Draw!';
        } else {
            draw.innerHTML = 'You Can Not Draw!'
        }
    }
})

function populate(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let squares = document.createElement('div');
        squares.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement('beforeend', squares);//first arg string, second var
        
    }
}

populate(16)

//make change size input function
function getSize(){
    let input = prompt('Give Me My Size');
    let message = document.querySelector('#message')
    if (input == '' || input > 100 || input <1){
        message.innerHTML = ('Please Enter a Number 1-100')
    } else {
        populate(input)
    }
}


function colorDiv(){
    if (click){
        if (color == 'black'){
            this.style.backgroundColor = 'black';
        } else if (color == 'gray'){
            this.style.backgroundColor = 'gray';
        } else if (color == 'eraser'){
            this.style.backgroundColor = 'white';
        } else if (color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white');
}


// const inputBox = document.querySelector('input-box');
// inputBox.addEventListener('input', function(){

// })


//color square function



//reset board function

//button event listeners


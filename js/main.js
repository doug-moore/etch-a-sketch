



// //populate board
function populate(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div);//first arg string, second var
    }

}

populate(32)


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
// const inputBox = document.querySelector('input-box');
// inputBox.addEventListener('input', function(){

// })


//color square function



//reset board function

//button event listeners


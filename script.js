let button = document.createElement('button');
button.innerHTML = 'Click to generate new grid';
button.classList.add('myButton');
button.addEventListener('click', promptUser);
document.body.appendChild(button);



let container = document.createElement('div');
document.body.appendChild(container);

container.style.backgroundColor = 'white'
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '960px'
container.style.height = '960px'



function makeGrid(sideLength) {
    
    container.innerHTML = '';

    let totalSquares = sideLength*sideLength;
    while (totalSquares>0){
        let square = document.createElement('div');
        square.style.width = ((960 - sideLength * 2) / sideLength) + 'px';
        square.style.height = ((960 - sideLength * 2) / sideLength) + 'px';
        square.style.backgroundColor = '#D1CBC1';
        square.style.margin = '1px'
        square.addEventListener('mouseover', function setInitalColor(){
        square.style.backgroundColor =  randomColor();
        square.removeEventListener('mouseover', setInitalColor);
        });
        container.appendChild(square); 
        totalSquares--;
    }
}

function promptUser() {
    let sideLength = +prompt("Enter length of desired grid:", "Example: for a 10x10 grid enter 10");
    if(sideLength>100){
        alert('Cannot make a grid over 100 squares long')
        return;
    }
    makeGrid(sideLength);
}

function randomColor() {
    const hue = Math.floor(Math.random() * 361);
    const saturation = Math.floor(Math.random() * 101); 
    const lightness = Math.floor(Math.random() * 101); 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
createGridElements(16, document.querySelector('#container'));

function createGridElements(gridDimension, container){

    for(let i = 0; i < gridDimension*gridDimension; i++){
        const div = document.createElement('div');
        container.appendChild(div);
    }
    const divs = document.querySelectorAll('#container>div');
    divs.forEach(div => div.addEventListener('mouseover',changeBackground));
}



function changeBackground(){
    this.style.cssText = 'background-color: #0a5688d5';
}

function changeGridlayout(){
    const gridDimension = prompt('How many squares per side?');
    const gidContainer = document.querySelector('#container')
    if(gridDimension != ""){
        setGridLayout(gridDimension);
        deleteGridElements(gidContainer);
        createGridElements(gridDimension,gidContainer);
    }
}

function deleteGridElements(gridContainer){
    gridContainer.innerHTML = '';
}

function setGridLayout(gridSize){
    document.documentElement.style.setProperty('--grid-size',gridSize);
}
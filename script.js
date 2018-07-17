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
    if(this.style.backgroundColor == ""){
        const bgColor = `rgb(${randRGB()},${randRGB()},${randRGB()})`
        
        this.style.backgroundColor = bgColor;
        this.setAttribute("data-bgcolor", bgColor);
    }
    else{
        const originalBgColor = this.dataset.bgcolor;
        const currentBgColor = this.style.backgroundColor;
        const orginalRGBvals = getRGBValues(originalBgColor);
        const currentRGBvals = getRGBValues(currentBgColor);
        const tenPercent = 10;
        const updatedRGBvals = substractPercentValues(currentRGBvals, getPercentages(orginalRGBvals, tenPercent));
        
        this.style.backgroundColor = `rgb(${updatedRGBvals[0]}, ${updatedRGBvals[1]}, ${updatedRGBvals[2]})`;

    }
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

function randRGB(){
    return Math.floor((Math.random() * 255) + 1) ;
}

function getRGBValues(rgbString){
    const regex = /\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b/g;
    return rgbString.match(regex);
}

function getPercentages(numbersArray, percentage){
    percentage /= 100;
    return numbersArray.map((number) => {return Math.ceil(number*percentage)});
}

function substractPercentValues(arrNumbs, percentValues){
    return arrNumbs.map((number,index) => (number-percentValues[index] >=0 ?number-percentValues[index]:0));
}
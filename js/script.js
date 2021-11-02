

// for(let i=0; i<100; i++){
//   const containerGrid = document.querySelector('.container-grid')
//   const square = document.createElement('div');
//   square.className = 'square';
//   containerGrid.append(square);
// }

// for(let i=0; i<81; i++){
//   const containerGrid = document.querySelector('.container-grid')
//   const squareHard = document.createElement('div');
//   squareHard.className = 'square hard';
//   containerGrid.append(squareHard);
// }

// for(let i=0; i<49; i++){
//   const containerGrid = document.querySelector('.container-grid')
//   const squareCrazy = document.createElement('div');
//   squareCrazy.className = 'square crazy';
//   containerGrid.append(squareCrazy);
// }

const buttonPlay = document.getElementById('button-play');
buttonPlay.addEventListener('click', function(){

   const containerGrid = document.querySelector('.container-grid')
   containerGrid.innerHTML = '';
  
  if(detectChange() === 'Easy'){

    for(let i=0; i<100; i++){  
      const squareEasy = createSquare(containerGrid);
      squareEasy.addEventListener('click', function(){
      this.classList.add('clicked');
     })
  }
  }
 
  if(detectChange() === 'Hard') {
    for(let i=0; i<81; i++){
      const squareHard = createSquareHard(containerGrid);
      squareHard.addEventListener('click', function(){
      this.classList.add('clicked');
     })
       
      // let squareHard = document.createElement('div');
      // squareHard.className = 'square hard';
      // containerGrid.append(squareHard);
    }
  }
  if(detectChange() === 'Crazy') {
    for(let i=0; i<49; i++){
      const squareCrazy = createSquareCrazy(containerGrid);
      squareCrazy.addEventListener('click', function(){
      this.classList.add('clicked');
     })
      // let squareCrazy = document.createElement('div');
      // squareCrazy.className = 'square crazy';
      // containerGrid.append(squareCrazy);
    }
  }

})

// const clickSquare = document.getElementsByClassName('.square');
// console.log(clickSquare);



function createSquare(target){
  let squareEasy = document.createElement('div');
  squareEasy.className = 'square easy';
  target.append(squareEasy);
  return squareEasy;
}
function createSquareHard(target){
  let squareHard = document.createElement('div');
  squareHard.className = 'square hard';
  target.append(squareHard);
  return squareHard;
}
function createSquareCrazy(target){
  let squareCrazy = document.createElement('div');
  squareCrazy.className = 'square crazy';
  target.append(squareCrazy);
  return squareCrazy;
}


function detectChange() {
  let opzioneSelect = document.getElementById("difficolta").value;
  // console.log(opzioneSelect);
  // console.log('Easy');
  if(opzioneSelect == 1) return 'Easy';
  if(opzioneSelect == 2) return 'Hard';
  if(opzioneSelect == 3) return 'Crazy';

}
let opzioneScelta = detectChange();
console.log(opzioneScelta);

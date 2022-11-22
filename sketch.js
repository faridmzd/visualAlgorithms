
const seedBtn = document.querySelector('#seedBtn'),
      pauseBtn = document.querySelector('#pauseBtn'),
      startBtn = document.querySelector('#startBtn'),
      resumeBtn = document.querySelector('#resumeBtn'),
      sortOption1 = document.querySelector('#option1'),
      sortOption2 = document.querySelector('#option2');

      let fps = document.getElementById("slider").value;

//sortOption2.addEventListener('click', swapValues);
seedBtn.addEventListener('click', seed);
pauseBtn.addEventListener('click', pauseButton ) ;
startBtn.addEventListener('click', start);
resumeBtn.addEventListener('click', resume);
let sortSelector = document.getElementById('sortSelector');
let selectedSortOption = sortSelector.value; 

document.getElementById("slider").oninput = function() {
  
   fps = document.getElementById("slider").value;
  document.getElementById("fpsNumber").innerHTML = fps;
  
};

let values;
let i = 0,j=0;
let _height,_width,_body,_html;
let elWidth;
let startPressed= false;
let sortingAlgo = 1;


function seed(){
   i=0; j=0;
  initArray(_width/elWidth);
  drawChart();
  startPressed = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
}

function start(){
  startPressed = true;
  pauseBtn.disabled = false;
  startBtn.disabled = true;
      

  if(selectedSortOption==1){
    loop();
    draw();
  }
  
   else if(selectedSortOption==2){
   quickSort(0,values.length-1);
     
     
  }
  
  
}

function resume(){
  startPressed = true;
    resumeBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseButton(){
  startPressed = false;
  resumeBtn.disabled = false;
  pauseBtn.disabled = true;
}

function setup() {
  setSizes();

  createCanvas(_width,_height);
  
  seed();
  
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
  noLoop();
}

function draw() {
 frameRate(parseInt(fps));
  if(startPressed&&selectedSortOption==1){
    bubbleSort();
    
  }
 
 
    }

  

function drawChart(){
       background('#212529');
       for (let k = 0; k < values.length ; k++){
    
         
       fill(values[k].color);
 
      rectMode(CENTER);
 
        rect(elWidth/2+k*elWidth,(_height-values[k].value/2),elWidth,values[k].value);}
}

 function swapArrElement(a,b){
    let temp = values[a];
            values[a] = values[b];
            values[b] = temp;
}

function initArray(size){
  
   values = new Array(Math.round(size));
  for(let i = 0; i < values.length; i++){
    values[i] = {value: randomInteger(1,_height), color:"rgb(255, 204, 0)"}
}}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setSizes(){
    _body = document.body;
  _navbar= document.getElementById("navbar");
  
   _html = document.documentElement;

   _height = Math.min( _body.scrollHeight, _body.offsetHeight, 
                       _html.clientHeight, _html.scrollHeight, _html.offsetHeight )-_navbar.clientHeight;
  
   _width = Math.min( _body.scrollWidth, _body.offsetWidth, 
                       _html.clientWidth, _html.scrollWidth, _html.offsetWidth ); 
  
  elWidth = 15;
  
  
}

async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

function bubbleSort(){
 if(i< values.length){
      
   
        if (values[j].value > values[j + 1].value) {
                  swapArrElement(j,j+1);  
                    
                }
      j++;
  
  if(j>=values.length-i-1){
    j=0;
    i++;
  }
   }
  
 else{
    noLoop();
  }
  values[j].color = "red";
  
 drawChart();
  values[j].color = "rgb(255, 204, 0)";
  
  
}

  async function quickSort(l,  r){
   
          if (l >= r) {
        return;
    }

    let p =  await partition(l, r);

   
   
  await quickSort(l, p - 1);
  await quickSort(p + 1, r);


      }

 async function partition(l, r){
    let pivot = values[r];
  pivot.color = "red";
    let i = l - 1;
    for (let j = l; j < r; j++) {
      
      values[j].color = "green";
      drawChart();
      await sleep(150/fps);
      
        if (values[j].value < pivot.value) {
            i += 1;   

             swapArrElement(i,j);
            values[j].color = "green";
            values[i].color = "rgb(255, 204, 0)";

            drawChart();
          await sleep(150/fps);

        }
      
      
      values[j].color = "rgb(255, 204, 0)";
    
}
   
   pivot.color = "rgb(255, 204, 0)";
   
      
     swapArrElement(i+1,r)
drawChart();
          await sleep(150/fps);
    return i + 1;
        }
function chooseAlgo (algo){
  sortingAlgo=algo;
}

function updateSelector() {
				
				 selectedSortOption =
                   sortSelector.value;

				
			}

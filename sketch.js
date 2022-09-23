const seedBtn = document.querySelector('#seedBtn'),
      pauseBtn = document.querySelector('#pauseBtn'),
      startBtn = document.querySelector('#startBtn');
      resumeBtn = document.querySelector('#resumeBtn');
      let fps;
seedBtn.addEventListener('click', seed);
pauseBtn.addEventListener('click', pauseButton ) ;
startBtn.addEventListener('click', start);
resumeBtn.addEventListener('click', resume);
document.getElementById("slider").oninput = function() {
    frameRate(parseInt(document.getElementById("slider").value));
};

let values;
let n,i = 0,j=0;
let _height,_width,_body,_html;
let elWidth = 20;
let startPressed= false;


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
  
    i=0;
  console.log(document.getElementById("slider").value);
   //frameRate(parseInt(document.getElementById("slider").value));
    draw();
  
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
}

function draw() {
  
if(startPressed){


 if(i<n){
      
        if (values[j] > values[j + 1]) {
                  swapElement();  
                    
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
  
 drawChart();
}
}
  
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawChart(){
background(0);
       for (let k = 0; k < n ; k++){
         if(k==j){
        fill(255, 60, 0);
           
         }
         else if(k== j+1){
           fill(0, 255, 0);
         }
         else{
        fill(255, 204, 0);
         }

      rectMode(CENTER);
 
        rect(elWidth/2+k*elWidth,height-values[k]/2,elWidth,values[k]);
}}

function swapElement(){
    let temp = values[j];
                    values[j] = values[j + 1];
                    values[j + 1] = temp;
                  
}

function initArray(size){
   values = new Array(Math.round(size));
  for(let i = 0; i < values.length; i++){
    values[i] = randomInteger(1,_height)
  }
  n=values.length;

}

function setSizes(){
    _body = document.body;
   _html = document.documentElement;

   _height = Math.max( _body.scrollHeight, _body.offsetHeight, 
                       _html.clientHeight, _html.scrollHeight, _html.offsetHeight );
  
   _width = Math.max( _body.scrollWidth, _body.offsetWidth, 
                       _html.clientWidth, _html.scrollWidth, _html.offsetWidth ); 
}

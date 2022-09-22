let values;
let n,i = 0;
var _height,_width,_body,_html;
let elWidth = 5;

function setup() {
   _body = document.body;
   _html = document.documentElement;

   _height = Math.max( _body.scrollHeight, _body.offsetHeight, 
                       _html.clientHeight, _html.scrollHeight, _html.offsetHeight );
  
   _width = Math.max( _body.scrollWidth, _body.offsetWidth, 
                       _html.clientWidth, _html.scrollWidth, _html.offsetWidth );  

  createCanvas(_width,_height);
  
  values = new Array(Math.round(_width/elWidth));
  for(let i = 0; i < values.length; i++){
    values[i] = randomInteger(1,_height)
  }
  n = values.length;
}

function draw() {
  background(0);
  
  if(i<n){

            for (let j = 0; j < n - i - 1; j++){
                if (values[j] > values[j + 1]) {
                    let temp = values[j];
                    values[j] = values[j + 1];
                    values[j + 1] = temp;
                  
                    
                }}
  }
  
  else{
    noLoop();
  }
  i++;
    for (let i = 0; i < n ; i++){
                  fill(255, 204, 0);
                  
                  //  line(i,_height,i,_height-values[i]); 
      rectMode(CENTER);
    
        rect(elWidth/2+i*elWidth,height-values[i]/2,elWidth,values[i]);
      
    }
}
  
  function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

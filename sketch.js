let values;
let n,i = 0;
var _height,_width,_body,_html;

function setup() {
   _body = document.body;
   _html = document.documentElement;

   _height = Math.max( _body.scrollHeight, _body.offsetHeight, 
                       _html.clientHeight, _html.scrollHeight, _html.offsetHeight );
  
   _width = Math.max( _body.scrollWidth, _body.offsetWidth, 
                       _html.clientWidth, _html.scrollWidth, _html.offsetWidth );  

  createCanvas(_width,_height);
  
  values = new Array(_width);
  for(let i = 0; i < values.length; i++){
    values[i] = randomInteger(0,_height);
  }
  n = values.length;
}

function draw() {
  background(0);
  
  if(i<n){

            for (let j = 0; j < n - i - 1; j++){
                if (values[j] > values[j + 1]) {
                    // swap temp and arr[i]
                    let temp = values[j];
                    values[j] = values[j + 1];
                    values[j + 1] = temp;
                  
                    
                }}
  }
  
  else{
    noLoop();
  }
  i++;
    for (let i = 0; i < n - 1; i++){
                     stroke(255, 204, 0);
                  
                    line(i,_height,i,_height-values[i]);
    }
}
  
  function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

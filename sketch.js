let values;
let n;
let i = 0;
function setup() {
  createCanvas(400, 400);
  values = new Array(width);
  for(let i = 0; i < values.length; i++){
    values[i] = randomInteger(0,height);
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
                  
                    line(i,height,i,height-values[i]);
    }
}
  
  function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
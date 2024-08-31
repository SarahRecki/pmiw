//Sarah Recki Fernandez - 119124/4 - Com 3
//https://youtu.be/oV3ZYM7JTxQ
let imagen;

let cant = 21;

let mitadDepantalla;
let anchoGrilla = 800;
let tamY = 0;
let movimiento = 0;


function setup(){
  createCanvas(800,400);
  imagen = loadImage('data/imagentp1.jpeg');
  mitadDepantalla = width/2;
}


function draw() {
  image(imagen, 0, 0, width/2, height);
  Cuadrilla();
}

function Cuadrilla() {
  tamY = height / cant;
  
  for ( let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      
      let tamX = map(abs(j - cant / 2), cant/2, 0, anchoGrilla / cant, movimiento/(anchoGrilla/cant));
      let x = mitadDepantalla + juntarColumnas(j, cant, anchoGrilla);
      let y = i * tamY;
      
      if ((i + j) % 2 ==0) {
        fill(0);
      }
      else {
        fill(255);
      }
      
      rect (x, y, tamX, tamY);
    }
  }
}

function   juntarColumnas(columnaActual, cantidad,  anchoGrilla) {
let ajustarPosicion = 0;
for ( let col = 0; col < columnaActual; col++){
  ajustarPosicion += map(abs(col - cantidad/2), cantidad/2, 0, anchoGrilla / cantidad, movimiento/ (anchoGrilla/cant));
}
return ajustarPosicion;
}

function keyPressed (){
  if (key=='a' && movimiento > 0){
  movimiento-=50;
}
  else if (key =='d' && movimiento < 2500){
  movimiento+=50;
  }
  else if (key=='r'){
  movimiento=0;
  }
}

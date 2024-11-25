//Morales Alfonsina 119093/5 y Sarah Recki 119124/4 
// https://youtu.be/RtbGdQeMDMc
//https://youtu.be/_I6THxHR_BA 

function setup() {
  juego.setup();
}

function draw() {
  juego.dibujar();
 if (juego.estado === Estados.inicio) {
   //pntalla inicio
    juego.mostrarPantallaInicio();
    juego.botonCreditos.hide();
    juego.botonInicio.show();
    juego.botonReiniciar.hide();
  } else if (juego.estado === Estados.juego) {
    //pntalla juego
    juego.jugar();
    juego.botonCreditos.hide();
    juego.botonInicio.hide();
    juego.botonReiniciar.hide();
  } 
  else if (juego.estado === Estados.ganador) {
    //pntalla ganador
    juego.mostrarPantallaGanador();
    juego.botonCreditos.show(); // Mostrar el botón de créditos
    juego.botonInicio.hide();
    juego.botonReiniciar.hide();
  }
  else if (juego.estado === Estados.perdedor) {
    
   juego.mostrarPantallaPerdedor();
    juego.botonCreditos.show(); // Mostrar el botón de créditos
    juego.botonInicio.hide();
    juego.botonReiniciar.hide();
  } 
  else if (juego.estado === Estados.creditos) {
    juego.mostrarPantallaCreditos();
    juego.botonCreditos.hide();
    juego.botonInicio.hide();
    juego.botonReiniciar.show(); // Mostrar el botón de reinicio
  }  
}

function mousePressed() {
  juego.mousePresionado(mouseX, mouseY);
}


const Estados = {
  INICIO: "inicio",
  JUEGO: "juego",
  GANADOR: "ganador",
  PERDEDOR: "perdedor",
  CREDITOS: "creditos",
};

const Config = {
  imgBasura: [],
  imgFondo: null,
  imgFondoInicio: null,
  objetivoPuntos: 3,
};

function inicializar() {
  estado = 0;
  //arreglo de texto

  textos[0] = "Bonnie, es una niña creativa.\n ¿hace un juguete improvisado llamado Forky con basura?";
  textos[1] = "A pesar de la inseguridad de Forky \n y su deseo de ser basura, Woody toma el papel de lider\n para ayudarlo a entender su nuevo rol como juguete.";
  textos[2] ="Durante el viaje en carretera\n, Forky escapa y Woody decide seguirlo. ";
  textos[3] ="En la aventura se encuentran con Bo Peep\n, quien ahora es un juguete independiente. \n Juntos tienen que encontrar la manera de volver con Bonnie";
  textos[4] ="Al final, Woody decide quedarse con Bo Peep,\n eligiendo una vida libre y sin ataduras a un niño.\n Se despide emotivamente de Forky y el resto de sus amigos, \n quienes regresan con Bonnie mientras él se embarca \n en una nueva aventura.";
  textos[5] ="Woody, cansado de cuidar a Forky, decide no ayudarlo más. ";
  textos[6] ="Forky acaba en un camión de basura, \n donde se desarma y muere.\n Woody se arrepiente de no haberlo protegido,\n pero es demasiado tarde.";
  textos[7] ="Woody decide que ya no es su deber cuidar a Forky \n y este  se va en busca de una nueva vida.\n Encuentra una familia que busca juguetes de segunda mano\n y decide quedarse con ellos, \n encontrando un nuevo propósito paral hacer feliz a un nuevo niño, \n aunque extraña a sus viejos amigos.";
  textos[8] ="Woody decide hablar con Forky\n luego de todas las aventuras que superaron juntos \n.Forky emocionado de ver a Woody, expresa su inseguridad\n sobre su valor como juguete. Woody lo anima, \n recordándole que ser un juguete significa ser amado\n y hacer feliz a quien lo tiene.\n Al final, Woody y Forky se convierten en inseparables, \n formando un lazo de amistad único.";
  textos[9] ="Woody decide que por mas que ama pasar su tiempo con Bo Peep \n ,donde mas amado se siente es en casa con Boonie\n ,Woody regresa a la casa de Bonnie junto a Forky\n  donde viven haciendo felices a la niña que \n los recibio con tanto amor desde el primer dia.";
 
  //arreglo de text de boton
  boton[0] = "Inciar";
  boton[1] ="Si";
  boton[2] ="Siguiente";
  boton[3] ="Reiniciar";
  boton[4] ="Creditos";
  
  boton2[0] = "No";
}

function imprimirTexto(i, tam, x, y){
  //caja de texto
  textSize(tam);
  fill(0);
  stroke(100);
  textAlign(LEFT);
  text(textos[i], x, y); 
}

function colisionBoton( x, y, w, h ) {
  //evalua colision boton Centrado:
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function dibujarboton1(txt, x, y, w, h) { //dibuja un boton centrado:
  push();
  rectMode(CENTER);
  noStroke();
  //evaluo para crear efecto rolover:
  if ( colisionBoton( x, y, w, h ) ) {
    fill(200);
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  //texto:
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}

function dibujarboton2(txt_btn_A, txt_btn_B) {
  push();
 
  dibujarboton1(txt_btn_A, width/2-200, height*0.93, 200, 40);
 
  dibujarboton1(txt_btn_B, width/2+200, height*0.93, 200, 40);

  pop();
}

function pantallaInicio(imgFondo){
push();
  background(0, 255, 0);
  image(imgFondo,0,0,width,height);
   
  dibujarboton1(boton[0], width*0.83, height*0.93, 200, 40);
pop();
}

function pantallaSiguiente(i,imgFondo ){
  push();
  background(155, 200, 0);
  image(imgFondo,0,0,width,height);
   imprimirTexto(i, 20, 100,height*0.80);
dibujarboton1(boton[2], width*0.83, height*0.93, 200, 40);
  pop();
}


function pantallaBotones(i, imgFondo){
push();
background(255, 0, 0);
  image(imgFondo,0,0,width,height);
  imprimirTexto(i, 20, 50 ,height*0.75);
  dibujarboton2(boton2[0], boton[1]);
pop();
}

function pantallaCreditos(i,imgFondo){
push();
  background(0, 255, 0);
   image(imgFondo,0,0,width,height);
    imprimirTexto(i, 20, width/ 2 ,height*0.80);
  dibujarboton1(boton[4], width*0.83, height*0.93, 200, 40);
pop();

}

function pantallaReiniciar(imgFondo){
push();
 image(imgFondo,0,0,width,height);
  //imprimirTexto(i, 20, width/ 2 ,height*0.80);
  dibujarboton1(boton[3], width*0.83, height*0.93, 200, 40);

pop();
}

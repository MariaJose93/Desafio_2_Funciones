
//2-2 y 2-3.- Pintar con un click y dejar un color por defecto

const ele = document.getElementById("ele1");

function pintar(color ='green'){
  ele.style.backgroundColor = color
} 
pintar();

ele.addEventListener("click", function(){
  pintar('yellow')
});

// 3.- Creación de cuadros 


function pintarnegro(){
  this.style.backgroundColor = 'black';
} 

const ele1 = document.getElementById("cuadro-1");
ele1.addEventListener("click", pintarnegro);

const ele2 = document.getElementById("cuadro-2");
ele2.addEventListener("click", pintarnegro);

const ele3 = document.getElementById("cuadro-3");
ele3.addEventListener("click", pintarnegro);

const ele4 = document.getElementById("cuadro-4");
ele4.addEventListener("click", pintarnegro);

let colorGlobal;

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    colorGlobal = 'pink';
  } else if (event.key === 's') {
    colorGlobal = 'orange';
  } else if (event.key === 'd') {
    colorGlobal = 'skyblue';
  } else if (event.key === 'q') {
    agregarCuadro('purple');
  } else if (event.key === 'w') {
    agregarCuadro('gray');
  } else if (event.key === 'e') {
    agregarCuadro('brown');
  }
  const keyCuadro = document.getElementById('key');
  keyCuadro.style.backgroundColor = colorGlobal;

});

function agregarCuadro(color) {
  //console.log('Agregando cuadro con color:', color);
  const contenedor = document.getElementById('contenedor');
  const nuevoCuadro = document.createElement('div');
  nuevoCuadro.className = 'cuadro';
  nuevoCuadro.style.backgroundColor = color;
  contenedor.appendChild(nuevoCuadro);
}

  
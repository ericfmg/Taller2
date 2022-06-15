//Punto 1
const edadmin = 18 ;
let edad =parseInt(prompt('Escribe tu edad bro o señorita'))
let dia = 0
if (edad >= edadmin) {
  let gen = parseInt(
    prompt(
      "¿Con qué genero te identificas más? \n Escribe: \n 1 para Mujer \n 2 para Hombre \n 3 para Otro"
    )
  );
  if (gen===1 || gen === 3){
    dia = parseInt(
        prompt(
          "¿Qué dia es bueno pa farriar? (HOY BB) \n Escribe\n 1 para Lunes \n 2 para Martes \n 3 para Miercoles \n 4 para Jueves \n 5 para Viernes \n 6 para Sabado \n 7 para Domingo"
        )
      );
  }else{
     dia = parseInt(
        prompt(
          "Veo parcero que día de la semana es hoy \n Escribe\n 1 para Lunes \n 2 para Martes \n 3 para Miercoles \n 4 para Jueves \n 5 para Viernes \n 6 para Sabado \n 7 para Domingo"
        )
      );
  }
  

  if (gen === 1 && dia === 4) {
    alert("bebesitaaaaaaaa!! hoy entras gratis uwu");
  } else {
    alert("el cover cuesta 10 lukitas pa");
  }
} else {
  alert("Muy peque bro, no puedes entrar :(");
}
 

// Punto 2
 const num = parseInt(
  prompt("Ingrese el número cuya tabla de multiplicar deseas  saber: ")
);

if (num !== "") {
  for (let i = 1; i <= 10; i++) {
    document.write(`${num} X ${i} = ${num * i} <br/>`);
  }
} else {
  alert("Número no válido");
} 

//Punto 3

const mun = parseInt(prompt("Ingrese un número"));

for (let i = 1; i <= mun; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    document.write(`amo-al-profe <br/>`);
  } else if (i % 5 === 0) {
    document.write(`amo_ <br/>`);
  } else if (i % 3 === 0) {
    document.write(`al_profe <br/>`);
  }else{
    document.write(`${i} <br/>`)
  }
}

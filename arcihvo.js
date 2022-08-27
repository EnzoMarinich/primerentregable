
let numero1 = Number(prompt("que tabla necesitas saber?"))
let numero2 = Number(prompt("hasta que numero necesitas la tabla?"))



for (let i = 0 ; i <=numero2 ; i++){
    let resultado = (numero1 * i);
    if(numero1 != 0 && numero2 != 0){
          document.write(`${numero1} x ${i} = ${resultado} <br>`)
    } else {
        alert("debe completar las dos preguntas con un numero");
    } 
}
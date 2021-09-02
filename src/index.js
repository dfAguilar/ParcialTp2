// Parcial TP2 2021 2do. Cuatrimestre Grupo B Belgrano

import fs from 'fs'

// Crear un mensaje con timer de 7 seg al comienzo del codigo ( 1 punto )
setTimeout(() => {
    console.log("Este es el mensaje con retardo de 7 segundos")
}, 7000);

//  Dado este array:
    const aPagos = [
        {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
        {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
        {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
        {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ]
// Recorrer e imprimir en consola con el método foreach, mostrando cliente e importe (1
// punto)

console.log("Recorrer e imprimir con foreach")
aPagos.forEach(pago => {
    console.log ("cliente: "+pago.cliente+", importe: "+pago.importe)
});

// Ordenar por cliente utilizando sort ( 1 punto )

console.log ("Array ordenado por cliente")
const aOrdenadoPorCliente = aPagos.sort ((pago1,pago2)=> (pago1.cliente.localeCompare(pago2.cliente)))
console.log (aOrdenadoPorCliente)
// Nuevo array con clientes que empizan con letra 'R'
// usando la funcion filter (1 punto)
console.log ("Array solo clientes que empiezan con R")
const aClientesConR = aPagos.filter(pago => (pago.cliente[0]=='R'))
console.log (aClientesConR)

// Nuevo array con la misma estructura de aPagos, pero aumentando
// un 30% el importe. (1 punto)

console.log ("array con importe aumentado 30%")
const aPagosAumento30 = aPagos.map (pago => (
    {id: pago.id,
     numero: pago.numero,
     importe : pago.importe+(pago.importe*30/100),
     cliente:pago.cliente
    }))
console.log (aPagosAumento30)

// instalar nodemon ( 1 punto )
// Leer datos.txt en forma sincrónica,
const rutaTexto = "./datos.txt"

console.log ("Leer archivo de texto e imprimir")
const archivoTexto = fs.readFileSync (rutaTexto,"utf-8")
console.log (archivoTexto)

// y agregar a este archivo la frase "nuevo texto" ( 1 punto )
console.log ("agrego la frase al archivo de texto e imprimo de nuevo")
fs.appendFileSync (rutaTexto,"nuevo texto","utf-8")

console.log (fs.readFileSync (rutaTexto,"utf-8"))


// Crear un repositorio en github y enviar el link por correo
// a manuel.caceres@ort.edu.ar ( 1 punto )
let carrera;
let cantmaterias;
let notaprom;
let edad;
let nommejorprom;
let flagprom = 1;
let mayorprom = 0;
let nombre;
let flagfem = 1;
let menoredad = 0;
let nombremenorfem;
let contquim = 0;
let contfis = 0;
let contsist = 0;
let contalumnos = 0;
let flagquim = 1;
let flagfis = 1;
let flagsist = 1;
let porcentajequim;
let porcentajefis;
let porcentajesist;
let flagestu = 1;
let mayorcantidaddematerias = 0;
let nombremasmaterias;
let edadmasmaterias;

for(let i = 0; i < 500; i++){
nombre =  prompt("Ingrese su nombre:");
while(!(isNaN(nombre))){
nombre = prompt("Dato inválido. por favor vuelva a ingresar su nombre:");
}
carrera = prompt("Ingrese el nombre de la carrera que le corresponda (química, física o sistemas):").toLowerCase();

sexo = prompt("Ingrese su sexo(masculino(m), femenino(f) o no binario(n)):").toLowerCase();

cantmaterias = parseInt(prompt("Ingrese la cantidad de materias que cursa (entre 1 y 5)"));

notaprom = parseInt(prompt("Ingrese se nota  de promedio(entre 0 y 10"));

edad = parseInt(prompt("Ingrese su edad:"));
while(!(edad>0) ){
edad = parseInt(prompt("Dato inválido. vuelva a ingresar su edad:"));


if(flagprom || (carrera == "física" && notaprom>mayorprom)){
    mayorprom = notaprom;
    nommejorprom = nombre;
}


if(flagfem || (sexo == "f" && menoredad<edad)){
    menoredad = edad;
    nombremenorfem = nombre;
    

}

if(edad > 0){
    contalumnos++;
}

if(flagquim || carrera == "química"){
    contquim++;
    flagquim = 0;

}else if(flagfis || carrera =="física"){
    contfis++;
    flagfis = 0;
}else if(flagsist || carrera == "sistemas"){
    contsist++;
    flagsist = 0;
}
if(carrera != "química"){

if(flagestu || cantmaterias>mayorcantidaddematerias){
    mayorcantidaddematerias = cantmaterias;
    nombremasmaterias = nombre;
    edadmasmaterias = edad;

}
}










}

porcentajequim = contquim*100/contalumnos;
porcentajefis = contfis*100/contalumnos;
porcentajesist = contsist*100/contalumnos;





if(flagprom){
    console.log("no hay alumno con mayor promedio en fisica" + "<br>");
}else{
    console.log("el mejor alumno con promedio en fisica es: " + nommejorprom + "<br>");
}
if(flagfem){
    console.log("No hay alumna mas joven " + "<br>");
}else{
    console.log("El nombre de la alumna más joven es: " + nombremenorfem + "<br>");
}
if(flagquim){
    console.log("no hay porcentaje de alumnos que estudien esa carrera" + "<br>");
}else{
    console.log("El porcentaje de alumnos que estudian química es: " + porcentajequim + "%" + "<br>");
}
if(flagfis){
    console.log("no hay porcentaje de alumnos en esa carrera " + "<br>");
}else{
    console.log("el porcentaje de alumnos de fisica es: " + porcentajefis+ "%" + "<br>");
}
if(flagsist){
    console.log("no existe porcentaje de alumnos en fisica " + "<br>");
}else{
    console.log("El porcentaje de alumnos que estudian sistemas es de: " + porcentajesist + "%" + "<br>");
}
if(flagestu){
    console.log("No se encuentra ese estudiante " + "<br>");

}else{
    console.log("el nombre del estudiante que cursa mas materias menos quimica es " + nombremasmaterias + "y la edad es:" + edadmasmaterias + "<br>");
}

}

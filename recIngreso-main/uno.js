let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let acumprogram = 0;
let acumanalis = 0;
let acumQa = 0;
let promprogram;
let promanalis;
let promQa;
let contprogram = 0;
let contanalis = 0;
let contQa = 0;
let flagprogram = 1;
let flaganalis = 1;
let flagQa = 1;
let seguir = "si";
let mayorsueldo = 0;
let flagsueldo = 1;
let sexomayorsueldo;
let mayorsueldofem;
let flagfem = 1;
let nombrefem;
let flagnobin = 1;
let contnobin = 0;


do{
nombre =  prompt("Ingrese su nombre: ");
while(!(isNaN(nombre))){
nombre = prompt("Dato inválido.Por favor Reingrese su nombre: ");
}

edad = parseInt(prompt("Ingrese su edad: "));
while(!(edad>0) ){
edad = parseInt(prompt("Dato inválido. Vuelta a ingresar su edad: "));

sexo = prompt("Ingrese su sexo(masculino(m), femenino(f) o no binario(n)): ").toLowerCase();

puesto = prompt("Ingrese su puesto de trabajo (programador, analista o Qa): ");

sueldo = parseInt(prompt("Ingrese su sueldo(entre 15000 y 70000): "));


if(flagprogram || puesto == "programador"){
	contprogram++;
	acumprogram += sueldo;
	flagprogram = 0;
}else if(flaganalis || puesto == "analista"){
	contanalis++;
	acumanalis += sueldo;
	flaganalis = 0;
}else if(flagQa || puesto == "Qa"){
	contQa++;
	acumQa += sueldo;
	flagQa = 0;
}

if(flagsueldo || (sueldo>mayorsueldo)){

	mayorsueldo += sueldo;
	flagsueldo = 0;
	sexomayorsueldo = sexo;
}

if(flagfem || (sueldo>mayorsueldofem && sexo == "f")){
	nombrefem = nombre;
	mayorsueldofem += sueldo;

}

if(flagnobin || (sexo == "n" && sueldo>=20000 && sueldo<=55000 && puesto == "programador")){
	contnobin++;

}












}
seguir = prompt("Desea seguir ingresando empleados?  s/n");


} while (seguir == "s");



promprogram = acumprogram/contprogram;
promanalis = acumanalis/contanalis;
promQa = acumQa/contQa;


if(flagprogram){
console.log("No hay promedio para el puesto de programador" + "<br>");
}else{
	console.log("El promedio de puesto de programador es: " + promprogram + "<br>");

}
if(flaganalis){
	console.log("No hay promedio para analista" + "<br>");
}else{
	console.log("El promedio de puesto de analista es: " + promanalis + "<br>");
}
if(flagQa){
	console.log("No hay promedio para el puesto de Qa" + "<br>");
}else{
	console.log("El promedio en el puesto de Qa es de: " + promQa + "<br>");

}
if(flagsueldo){
	console.log("Ningun sexo alcanza el puesto mayor" + "<br>");

}else{
	console.log("El sexo que percibe el mayor sueldo es el " + sexomayorsueldo + "<br>" );
}
if(flagfem){
	console.log("No existe un empleado femenino. " + "<br>");
}else{
	console.log("El nombre del empleado femenino con mayor sueldo mas grande es:" + nombrefem + "<br>");
}
if(flagnobin){
	console.log("No existen programadores de sexo no binarios que cobren entre 20000 y 55000" + "<br>");
}else{
	console.log("La cantidad de programadores de sexo no binarios que cobran sueldos entre 20000 y 55000 es: " + contnobin + "<br>"); 
} {


} 



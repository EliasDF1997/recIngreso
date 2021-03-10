
	function mostrar() {
		let nombre;
		let cantidadDeLamparas;
		let contadorFelipe = 0;
		let contadorArg= 0;
		let contIlluminatis = 0;
		let acumFelipe = 0;
		let acumArg = 0;
		let acumIlluminatis = 0;
		let promFelipe = 0;
		let promArg = 0;
		let promIlluminatis = 0;
		let marca;
		let desc10;
		let desc5;
		let totalDesc;
		let marcaMaxVentas;
		let precioXUnidad;
		let total;
		let precioFinal;
		let totalVentas = 0;
		seguir = "s"
		do {
	
			nombre = prompt("Ingrese el nombre del cliente por favor ").toLowerCase();
			cantidadDeLamparas = parseInt(prompt("Ingrese la cantidad de lamparas: "));
			while (isNaN(cantidadDeLamparas) || cantidadDeLamparas <= 0) {
				cantidadDeLamparas = parseInt(prompt("Dato incorrecto. vuelva a ingresar la cantidad de lamparas: "));
			}
			marca = prompt("Ingrese la  marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
			while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis") {
				marca = prompt("Error. Ingrese marca: felipelamparas / argentinaluz / illuminatis").toLowerCase();
			}
			precioXUnidad = parseInt(prompt("Ingrese el precio por unidad "));
			while (isNaN(precioXUnidad) || precioXUnidad <= 0) {
				precioXUnidad = parseInt(prompt("dato incorrecto vuelva a ingresar el precio por unidad"));
			}
			total = precioXUnidad * cantidadDeLamparas;
			totalVentas += total
	
			if (marca == "felipelamparas" && cantidadDeLamparas > 5) {
				desc10 = total * 10 / 100
				precioFinal = total - desc10
				totalDesc += desc10
			}
			else if (marca == "argentinaluz" && cantidadDeLamparas >= 3) {
				desc5 = total * 5 / 100
				precioFinal = total - desc5
				totalDesc += desc5
			}
	
	
			if (marca == "felipelamparas") {
				acumFelipe += cantidadDeLamparas
				contFelipe++
			} else if (marca == "argentinaluz") {
				acumArg += cantidadDeLamparas
				contadorArg++
			} else {
				acumIlluminatis += cantidadDeLamparas
				contIlluminatis++
			}
	
			if (contadorFelipe > contadorArg && contadorFelipe > contIlluminatis) {
				marcaMaxVentas = "FelipeLamparas"
			} else if (contadorArg >= contadorFelipe && contadorArg > contIlluminatis) {
				marcaMaxVentas = "ArgetinaLuz"
			} else {
				marcaMaxVentas = "Illuminatis"
			}
	
	
	
			seguir = prompt("Desea seguir?:  s/n")
		} while (seguir == "s");
	
		if (contadorFelipe != 0) {
			promFelipe = acumFelipe / contadorFelipe
		}
		if (contadorArg != 0) {
			promArg = acumArg / contadorArg
		}
		if (contIlluminatis != 0){
			promIlluminatis = acumIlluminatis / contIlluminatis
		}
	
	
		console.log("La empresa recaudo $" + totalVentas);
		if (totalDesc != 0) {
			console.log("La empresa perdio $" + totalDesc + " por descuentos");
		}
		console.log("El promedio de la marca FelipeLamparas es de " + promFelipe);
		console.log("El promedio de la marca ArgentinaLuz es de " + promArg);
		console.log("El promedio de la marca Illuminatis es de " + promIlluminatis);
		console.log("La marca que mas vendio es " + marcaMaxVentas);
	
	}




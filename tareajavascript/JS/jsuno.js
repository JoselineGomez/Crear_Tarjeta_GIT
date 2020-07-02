function alerta() 
{
var mensaje;
var opcion = prompt("Introduzca el número de cajas:");
 
if (opcion == null || opcion == ""){
    mensaje = "Has cancelado o no has introducido número";
}
else{
	mensaje = "Vamos a colocar " + opcion + " cajas";
}
document.getElementById("ejeuno").innerHTML = mensaje;
/*if (opcion < 8){

}
else{

}*/
}

function cuestionario(){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var ciudad = document.getElementById("ciudad");
	for(var i = 0; i <= ciudad.length; i++){
		if (ciudad[i].checked){
			e = parseInt(ciudad[i].value);
			switch(e){
				case 'a': 
				final = "el lado norte de la ciudad";
		        case 'b':
		        final = "el lado sur de la ciudad";
		        break;
		        case 'c':
		        final = "el centro de la ciudad";
	            break;
	         	default:
	         	document.write('No seleccionaste ninguna opción');
	         }
	    }
	}
	document.getElementById('resultado').innerHTML = "Very good" + nombre + apellido + "tu parte fav es " + final;
}


	
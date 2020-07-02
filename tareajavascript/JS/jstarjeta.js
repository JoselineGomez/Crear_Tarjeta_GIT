function hacertarjeta(){
	var texto = "";
	if(document.getElementById("sv").checked ==true)
		texto = texto + document.getElementById("sv").value;
	if(document.getElementById("fc").checked ==true)
		texto = texto + document.getElementById("fc").value;
	if(document.getElementById("mo").checked ==true)
		texto = texto + document.getElementById("mo").value;
	texto = texto + document.getElementById("titulo").value + "<br/>";
	texto = texto + document.getElementById("subti").value + "<br/>";
	texto = texto + document.getElementById("textarea").value + "<br/>";
	texto = texto + document.getElementById("autor").value + "<br/>";
	if(document.getElementById("ros").checked ==true)
		texto = texto + document.getElementById("sv").value;
	if(document.getElementById("nar").checked ==true)
		texto = texto + document.getElementById("fc").value;
	if(document.getElementById("mor").checked ==true)
		texto = texto + document.getElementById("mo").value;
	if(document.getElementById("azu").checked ==true)
		texto = texto + document.getElementById("fc").value;
	if(document.getElementById("ver").checked ==true)
		texto = texto + document.getElementById("mo").value;
	document.getElementById("haciendo").innerHTML = texto;
	
}
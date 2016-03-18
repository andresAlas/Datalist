function inicio()
{
	var datalist = document.getElementById("datalist");
	var input = document.getElementById("input");
	var texto = document.getElementById("texto");

	input.addEventListener("keyup", function (evento)
	{
		if(evento)
		{
			texto.innerHTML = input.value;
		}
	});
}
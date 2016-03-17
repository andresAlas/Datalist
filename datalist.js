function inicio()
{
	var datalist = document.getElementById("datalist");
	var input = document.getElementById("input");

	input.addEventListener("keyup", function (event)
	{
		if(event.which === 13)
		{
			alert(input.value);
		}
	}, false);
}
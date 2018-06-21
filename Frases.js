$(document).ready(function () {

	var dia = $("#dias").html();

	$("#frase").html(getFraseDia(dia));

});

function getFraseDia (dia) {

	switch(dia) {
	    case '25':
	        return "Iluminados pela ressurreição de Cristo, peregrinamos (física ou espiritualmente) até o Santuário de Fátima, Deus sabe o caminho que cada um teve que percorrer para chegar até aqui, mas como é consolador estar diante da imagem de Nossa Senhora! Seu olhar nos transmite uma doçura imensa, sua ternura nos envolve como num abraço de mãe. Fonte: O ROSÁRIO - CM 517, Páginas 19 a 21."
	        break;

		case '24':
	        return "Aquele abraço com que a mãe recebe o filho que chega, e não dá para definir de quem é a maior alegria do filho ou da mãe. E assim em seu colo, sem precisar de palavras, todas as nossas dores, lágrimas, nossas misérias, pecados, se transformam. Fonte: O ROSÁRIO - CM 517, Páginas 19 a 21."
	        break;
		case '23':
	        ""
	        break;
		case '':
	        ""
	        break;
		case '':
	        ""
	        break;
		case '':
	        ""
	        break;
		case '':
	        ""
	        break;
		case '':
	        ""
	        break;

	    default:
	        "";
	        break
	}

}
let codigo_gerado = document.getElementById('codigo-gerado');

let progress = document.getElementById('progress');
let progress_bar = document.getElementById('progress-bar');


let btn_gerar = document.getElementById('btn-gerador');

let select_value = document.getElementById('select-value');

var segs = 0;


//CLIQUE NO BOTAO
function click_generator(){
 		
	//ANIMAÇÃO DA BARRA 
	//progress_bar.style.animation = 'progress-animation 2s';
	
	selecao_valor();

	
	//Para esperar segs*1000 segundos para executar a funçao
	var x = setTimeout(function(){
		textoAleatorio(5);
	}, segs*1000);
	

	
	
}


function selecao_valor(){
	let select_1 = select_value.value;	

	switch(select_1){
		case '10':
			segs = 2;
			progress_bar.style.animation = 'progress-animation ' + segs+'s';

		break;

		case '20':
			segs = 4;
			progress_bar.style.animation = 'progress-animation ' + segs+'s';
		break;

		case '30':
			segs = 6;
			progress_bar.style.animation = 'progress-animation ' + segs+'s';
		break;

		case '50':
			segs = 8;
			progress_bar.style.animation = 'progress-animation ' + segs+'s';
		break;

		case '100':
			segs = 10;
			progress_bar.style.animation = 'progress-animation ' + segs+'s';
		break;
	}

}


function textoAleatorio(tamanho)
{	
    var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var codigo1 = '';
    var codigo2 = '';
    var codigo3 = '';
    var codigo = '';
    for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        codigo1 += letras.substring(rnum, rnum + 1);
    }
     for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        codigo2 += letras.substring(rnum, rnum + 1);
    }
     for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        codigo3 += letras.substring(rnum, rnum + 1);
    }
   	
    codigo = codigo1 + ' - ' + codigo2 + ' - ' + codigo3

    codigo_gerado.innerHTML = `<p>${codigo}</p>`;
}
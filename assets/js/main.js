/*=================================================
Theme Name: Caesb Ambiental
Theme URI: Intranet Caesb Ambiental
Author: PRC CAESB - Web Design: Ricardo Lima.
Author URI: PRC - CAESB
Description: Quiz institucional - Caesb Ambiental
Version: 1.0
=================================================*/



    //Inicio do quiz
	$(document).ready(function(){
	//Declarando variaveis globais
		resposta = $("#js-alt").find(".js-ok").attr("alt");
		console.log(resposta);

		$(".js-alternativa").on("click", function(e){
			e.preventDefault();
			alternativaClicada = $(this).attr('alt');

			if (alternativaClicada){
				$(".js-alternativa").removeClass("js-sel");
				$("#" + alternativaClicada).addClass("js-sel");

				}

		});

		$("#btnResposta").click (function(){

		try{
		if (resposta == alternativaClicada){
			 $(".js-alternativa").removeClass("js-sel");
			 $("#" + alternativaClicada).addClass('js-correta');
			 $("#" + alternativaClicada).parent().find(".checkSucess").show();
			}else{
			 $(".js-alternativa").removeClass("js-sel");
			 $("#" + resposta).addClass('js-correta');
			 $("#" + alternativaClicada).addClass('js-errada');
			 $("#" + alternativaClicada).parent().find(".checkError").show();
				}
		$("#js-alt").addClass("js-linkOff");
		}catch (err){

			alert("Por favor, selecione uma alternativa antes de continuar !");

			}
		});

	});

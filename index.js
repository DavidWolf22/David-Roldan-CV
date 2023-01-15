//login
function login()
	{

	let user=document.getElementById("usuario").value;
	let pass=document.getElementById("clave").value;
	
 
	if(user=="vista" && pass=="vista")
	{
		window.location="home.html";
	}
	else{
		alert("Datos Incorrectos");
	}

	}

//boton ir arriba

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

    $(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});


});

function login_edit()
	{

	let user=document.getElementById("usuario").value;
	let pass=document.getElementById("clave").value;
	
 
	if(user=="Master" && pass=="Wolf22")
	{
		window.location="home.html";
	}
	else{
		alert("Usuario y/o contraseña sin permisos de edición");
	}

	}

//boton ir arriba

$(document).ready(function(){

	$('.bi').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

    $(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.bi').slideDown(300);
		} else {
			$('.bi').slideUp(300);
		}
	});


});

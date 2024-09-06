// JS CIVIL
// Menu activo
var localizacionNav = window.location.pathname;
var localizacionPath = localizacionNav.split('/')[1];
var localizacionSubPath = localizacionNav.split('/')[3];
var localizacionUri = '/' + localizacionPath;

// Menu principal
if (localizacionPath == 'departamento') {
    $('.header__nav a:contains("Departamento")').addClass('active');
};
if (localizacionPath == 'academicas-y-academicos') {
    $('.header__nav a:contains("Académicas/os")').addClass('active');
};
if (localizacionPath == 'pregrado') {
    $('.header__nav a:contains("Pregrado")').addClass('active');
};
if (localizacionPath == 'carreras') {
    $('.header__nav a:contains("Pregrado")').addClass('active');
};
if (localizacionPath == 'postgrado') {
    $('.header__nav a:contains("Postgrado")').addClass('active');
};
if (localizacionPath == 'investigacion') {
    $('.header__nav a:contains("Investigación")').addClass('active');
};
if (localizacionPath == 'laboratorios') {
    $('.header__nav a:contains("Laboratorios")').addClass('active');
};
if (localizacionPath == 'extension') {
    $('.header__nav a:contains("Extensión")').addClass('active');
};

// Canales
if (localizacionPath == 'construccion') {
    $('.header__links a:contains("Construcción")').addClass('active');
};
if (localizacionPath == 'estructura-contruccion-y-geotecnia') {
    $('.header__links a:contains("Estructuras, Construcción y Geotecnia")').addClass('active');
};
if (localizacionPath == 'recursos-hidricos-y-medio-ambiente') {
    $('.header__links a:contains("Recursos Hídricos y Medio Ambiente")').addClass('active');
};
if (localizacionPath == 'ingenieria-de-transporte') {
    $('.header__links a:contains("Ingeniería de Transporte")').addClass('active');
};


// BARRA UCHILE -- facultades
$(".uchile__dropdown__btn").click(function() {
  $(this).toggleClass("open");
  $(".uchile__dropdown__links").toggleClass("open");

  // Abrir facultades cierra menu
  $(".header__nav .container").removeClass("open");
  $(".header__open-nav").removeClass("open");

  // Abrir facultades cierra search
  $(".uchile__search").removeClass("open");
  $(".uchile__open-search").removeClass("open");

  // Abrir facultades cierra submenu Admision
  $(".header__nav-dropAdmi").removeClass("open");
  $(".header__nav-dropdownAdmi").removeClass("open");

  // Abrir facultades cierra submenu Departamentos
  $(".header__nav-dropDepa").removeClass("open");
  $(".header__nav-dropdownDepa").removeClass("open");
});


// BARRA UCHILE -- buscar
$('.uchile__open-search').click(function () {
	$(this).toggleClass('open');
	$('.uchile__search').toggleClass('open');

	//abrir buscar cierra facultades
	$('.uchile__dropdown__links').removeClass('open');
	$('.uchile__dropdown__btn').removeClass('open');

	//abrir buscar cierra menu
	$('.header__nav .container').removeClass('open');
	$('.header__open-nav').removeClass('open');
});


// BARRA UCHILE MOBILE -- menu
$('.header__open-nav').click(function () {
	$(this).toggleClass('open');
	$('.header__nav .container').toggleClass('open');

	// abrir menu cierra facultades
	$('.uchile__dropdown__links').removeClass('open');
	$('.uchile__dropdown__btn').removeClass('open');

	// abrir menu cierra buscar
	$('.uchile__search').removeClass('open');
	$('.uchile__open-search').removeClass('open');
});


// ARCHIVOS MOBILE -- duplica titulo y transforma en click para navegador
$(".archivos .content__aside .mod:first-of-type .mod__titles").clone().appendTo(".content__mobile");
$(".archivos .content__mobile").click(function() {
  $(this).toggleClass("open");
  $(".content__aside ").slideToggle("slow");
});


// PORTADA -- agrega img de fondo
var fotiwi = $('.section__image .mod img').attr('src');
$('.section__image').css("background-image", "url(" + fotiwi + ")"); 


// AGENDA -- tranforma formato fecha agenda Inicio
var dateAI = $(".mod-cal-date .mod__item");
$(dateAI).each(function() {
  var date = $(this).find(".mod-cal-date__hour").text();
  var arr = date.split('/');

  if (arr[1] == '1') {
    arr[1] = 'ene';
  } else if (arr[1] == '2') {
    arr[1] = 'feb';
  } else if (arr[1] == '3') {
    arr[1] = 'mar';
  } else if (arr[1] == '4') {
    arr[1] = 'abr';
  } else if (arr[1] == '5') {
    arr[1] = 'may';
  } else if (arr[1] == '6') {
    arr[1] = 'jun';
  } else if (arr[1] == '7') {
    arr[1] = 'jul';
  } else if (arr[1] == '8') {
    arr[1] = 'ago';
  } else if (arr[1] == '9') {
    arr[1] = 'sep';
  } else if (arr[1] == '10') {
    arr[1] = 'oct';
  } else if (arr[1] == '11') {
    arr[1] = 'nov';
  } else if (arr[1] == '12') {
    arr[1] = 'dic';
  }

  $(this).find(".mod-cal-date__hour").html("<div class='mm'>" + arr[1] + "</div><div class='dd'>" + arr[0] + "</div><div class='yy'>" + arr[2] + "</div>");
});


// AGENDAS -- con direccion URL online
var addressLink = $('.activity__data-address').text().substr(0,5);
var getHref = $('.activity__data-address').text().replace(/\(|\)/g, '');
if (addressLink == '(http'){    
  $('.activity__data-address').wrap('<a target="_blank" href="'+getHref+'"></a>'); 
  var cambiarTexto = $('.activity__data-address').text().replace(/\(|\)/g, '');
  $('.activity__data-address').text(cambiarTexto);
}


// AGENDAS -- cuando está vacío el resultado de...
if ($('.mod-cal-result .mod-cal-result__date > *').length == 0) {
  $('.mod-cal-result .mod-cal-result__date').text('No hay actividades programadas.');
}


// CURSOS -- transforma formato fecha resultados de cursos
var dateRC = $(".mod_course-result .mod__list-item");
$(dateRC).each(function() {
  var date = $(this).find(".mod__date").text();
  var arr = date.split('/');

  if (arr[1] == '1') {
    arr[1] = 'ene';
  } else if (arr[1] == '2') {
    arr[1] = 'feb';
  } else if (arr[1] == '3') {
    arr[1] = 'mar';
  } else if (arr[1] == '4') {
    arr[1] = 'abr';
  } else if (arr[1] == '5') {
    arr[1] = 'may';
  } else if (arr[1] == '6') {
    arr[1] = 'jun';
  } else if (arr[1] == '7') {
    arr[1] = 'jul';
  } else if (arr[1] == '8') {
    arr[1] = 'ago';
  } else if (arr[1] == '9') {
    arr[1] = 'sep';
  } else if (arr[1] == '10') {
    arr[1] = 'oct';
  } else if (arr[1] == '11') {
    arr[1] = 'nov';
  } else if (arr[1] == '12') {
    arr[1] = 'dic';
  }

  $(this).find(".mod__date").html("<span class='dd'>" + arr[0] + "</span> <span class='mm'>" + arr[1] + "</span>");
});


// CURSOS -- cambia hora 00:00 a Por definir
var str2 = $(".mainCurso .card__row .card__col:contains('00:00 hrs.')").html("Por definir");
$(".mainCurso .card__row .card__col:contains('00:00 hrs.')").html("Por definir");

// CURSOS -- cambia %% y @@ por nada
$(".content__description p:contains('%%')").each( function() {
  var orgText = $(this).html();
  var newText = orgText.replace('%%','');
  $(this).html(newText);
}); 

$(".content__description p:contains('@@')").each( function() {
  var orgText2 = $(this).html();
  var newText2 = orgText2.replace('@@','');
  $(this).html(newText2);
});


//  Oculta Noticias si están duplicadas
var featured = $('.mainNoticia .content__more .mod_last-news a').attr('href');
$('.mainNoticia .content__more .mod_last-news a[href*="'+ localizacionNav +'"]').parent().parent().hide();

//  Oculta Videos si están duplicados
var featured = $('.mainVideo .content__more .mod_last-videos a').attr('href');
$('.mainVideo .content__more .mod_last-videos a[href*="'+ localizacionNav +'"]').parent().parent().hide();

//  Oculta Fotos si están duplicadas
var featured = $('.mainGaleriaFotos .content__more .portlet_otros_contenidos a').attr('href');
$('.mainGaleriaFotos .content__more .portlet_otros_contenidos a[href*="'+ localizacionNav +'"]').parent().parent().hide();

//  Oculta Audios si están duplicados
var featured = $('.mainAudio .content__more .portlet_otros_contenidos a').attr('href');
$('.mainAudio .content__more .portlet_otros_contenidos a[href*="'+ localizacionNav +'"]').parent().parent().hide();

//  Oculta Publicaciones si están duplicadas
var featured = $('.mainPublicacion .content__more .mod_last-publications a').attr('href');
$('.mainPublicacion .content__more .mod_last-publications a[href*="'+ localizacionNav +'"]').parent().parent().hide();


// FOTOS -- Lightbox en imagenes related - Publicaciones
var obtLinkImagenPub = $('.data__image img').attr('src');
$('.data__image img').wrap('<a href="'+obtLinkImagenPub+'" data-fancybox="gallery"></a>');


// FOTOS -- impide abrir fotos pequeñas con fancybox
$('.template__main-img').each(function(){
  var img =  $(this).find('img');
  var anchoReal;
  // Create dummy image to get real width and height
  $("<img>").attr("src", $(img).attr('src')).load(function(){
    var realWidth = this.width;
    var realHeight = this.height;
    if(realWidth<250){
      $(img).unwrap();
    }
  });
});   


// FOTOS -- fancybox para galeria de fotos (se mantiene comentado sólo para localhost)
$('a[rel="showbox"]').attr('data-fancybox', 'gallery');
$('.detail__gallery a[data-fancybox="gallery"]').fancybox();


// POSTGRADOS -- tabs
$('.tab__list a').click(function() {
  var idTab = $(this).attr('href');
  $('.tab__list a').removeClass('active');
  $(this).addClass('active');
  $('.tab__item').hide();
  $(idTab).show();
  return false;
});


// GENERAL -- destacados mod_highlight
$('.mod_highlight img').each(function() {
  $(this).wrap('<figure></figure>');
});


// GENERAL -- mod__more al lado de los titulos
$(".mod_last-news .mod__more").appendTo(".mod_last-news .mod__titles");
$(".mod-cal-date .mod__more").appendTo(".mod-cal-date .mod__titles");


/*// GENERAL -- ajuste para imagenes
$('.content__description img').each(function () {
	// envolver
	$(this).parent().addClass('detail__img');
	// pegar pie de foto
	var obtenerDescripcion = $(this).attr('longdesc');
	if (obtenerDescripcion) {
		$(this).parent().append('<div class="detail__img-caption">' + obtenerDescripcion + '</div>');
	}
	// float
	var float = $(this).get(0).style.float;
	if (float.length > 0) {
		$(this).parent().addClass(float).width($(this).width());
	}
});*/

// GENERAL -- ajuste para imagenes
$('.content__description img').each(function () {
  // envolver
  $(this).wrap("<div class='detail__img'></div>");
  // pegar pie de foto
  var obtenerDescripcion = $(this).attr('longdesc');
  if (obtenerDescripcion) {
    $(this).parent().append('<div class="detail__img-caption">' + obtenerDescripcion + '</div>');
  }
  // float
  var float = $(this).get(0).style.float;
  if (float.length > 0) {
    $(this).parent().addClass(float).width();
  }
});


// GENERAL MOBILE -- nav duplica (nombre de pagina actual) y transforma en click para navegador
$(".interior .mod_nav a.mod__title").clone().appendTo(".content__mobile");
$(".interior .content__mobile").click(function() {
  $(this).toggleClass("open");
  $(".content__aside ").slideToggle("slow");
});


// GENERAL -- Envuelve iframe Youtube con div + ratio
$(".content__description iframe[src*='youtube']").each(function() {
  var vwidth  = $(".content__description iframe[src*='youtube']").width();
  var vheight = $(".content__description iframe[src*='youtube']").height();
  var ratio = (vheight / vwidth) * 100;
  console.log(vwidth, vheight, ratio);
  $(this).wrap('<div class="video-responsive yt"></div>').parent().css('padding-top', ratio + '%');
});


// GENERAL -- Envuelve iframe Vimeo con div + ratio
$(".content__description iframe[src*='vimeo']").each(function() {
  var vwidth  = $(".content__description iframe[src*='vimeo']").width();
  var vheight = $(".content__description iframe[src*='vimeo']").height();
  var ratio = (vheight / vwidth) * 100;
  console.log(vwidth, vheight, ratio);
  $(this).wrap('<div class="video-responsive vm"></div>').parent().css('padding-top', ratio + '%');
});


// GENERAL -- Envuelve iframe Google con div + ratio
$(".content__description iframe[src*='google']").each(function() {
  var vwidth  = $(".content__description iframe[src*='google']").width();
  var vheight = $(".content__description iframe[src*='google']").height();
  var ratio = (vheight / vwidth) * 100;
  console.log(vwidth , vheight , ratio);
  $(this).wrap('<div class="frame-responsive gg"></div>').parent().css('padding-top', ratio + '%');
});


// GENERAL -- Envuelve iframe Facebook con div + ratio
$(".content__description iframe[src*='facebook']").each(function() {
  var vwidth  = $(".content__description iframe[src*='facebook']").width();
  var vheight = $(".content__description iframe[src*='facebook']").height();
  var ratio = (vheight / vwidth) * 100;
  console.log(vwidth , vheight , ratio);
  $(this).wrap('<div class="video-responsive fb"></div>').parent().css('padding-top', ratio + '%');
});


// GENERAL : ajuste para videos cuadrados 1:1
$('.content__description iframe').each(function() {
  var esFacebook  = $(this).attr('src');
  var urlPre      = esFacebook.split('/');
  var esAncho     = esFacebook.includes('width=500');
  var esAlto      = esFacebook.includes('height=500');

  if (urlPre[2] == 'www.facebook.com' && esAncho && esAlto) {
    $(this).parent().css('padding-top', '100%');
  }
});

// GENERAL -- Envuelve tablas con div para generar scroll
$(".content__description table").each(function() {  
  $(this).wrap('<div class="table-responsive"></div>');
});


// GENERAL -- Buscador interno
$('input#id_search').quicksearch('.content__description ol li');
$('input#id_search').quicksearch('.content__description ul li');
$('input#id_search').quicksearch('.content__description table tbody tr');


// GENERAL -- tools subir con animacion
$('.subir a').attr('href', '#;');
$('.subir a').on('click', function () {
  $('html, body').animate({scrollTop: 0,},600);
});


// GENERAL -- tools herramienta copiar
var clipboard = new Clipboard('.d_clip_button');
clipboard.on('success', function(e) {
  $('#d_clip_button').addClass('success').text('copiado');
});
clipboard.on('error', function(e) {
  $('#d_clip_button').addClass('error');
});


// Lo que ocurre fuera del modo editor
$(document).ready(function() {
  var contextoEditorMagnoliaReady = $("script[src$='/.resources/adminCentral/js/remoto.js']"); //verificar si estamos en editor
  if (!contextoEditorMagnoliaReady.length > 0) {

    // Slider portada
    $('.carrusel .bxslider').bxSlider({
      auto: true,
      autoHover: true,
      touchEnabled: false,
      captions: true,
      mode: 'fade',
      infiniteLoop: true
    });


    // Oculta related si no hay
    var rltd = $(".content__related");
    var lnk = $(".related__links");
    var att = $(".related__attachments");
    var mgs = $(".related__images");
    $(rltd).each(function() {
      if (!$(lnk).children().length > 0) {
        $(lnk).hide();
      }
      if (!$(att).children().length > 0) {
        $(att).hide();
      }
      if (!$(mgs).children().length > 0) {
        $(mgs).hide();
      }
    });


    // Oculta las informaciones de Publicaciones
    var dinf = $(".data__info");
    var dinfl = $(".data__info-list");
    $(dinf).each(function() {
      if (!$(dinfl).children().length > 0) {
        $(dinf).remove();
      }
    });


    // Oculta tab cuando contenido está vacío de Postgrado
    if ($('#planestudio .content__description > *').length == 0) {
      $('.tab__list a[href*=#planestudio]').remove();
    }
    if ($('#requisitos .content__description > *').length == 0) {
      $('.tab__list a[href*=#requisitos]').remove();
    }
    if ($('#postulaciones .content__description > *').length == 0) {
      $('.tab__list a[href*=#postulaciones]').remove();
    }

  }
});
// Lo que ocurre fuera del modo editor


// Google
$(window).load(function () {
  // GENERAL -- Actualizacion buscador de Google (placeholder)
  $('.uchile__search .gsc-input').attr('placeholder', 'Buscar en ingcivil.uchile.cl');

  // GENERAL -- tools print
  $('#herramientas .herramientas-redes_addthis .at-share-btn-elements').append(
    "<a class='at-icon-wrapper at-print' href='javascript:window.print()'><span class='at-icon-wrapper'><i class='i-print'></i></span></a>"
  );
});

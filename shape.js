"use strict";

$(window).on("load", function () {
  $("div.menu:first-child").show();
});

$(".nav a, .hamburger-container .box a").on("click", function () {
  $("div.menu").fadeOut(30);

  var targetDiv = $(this).attr("data-rel");
  setTimeout(function () {
    $("#" + targetDiv).fadeIn(30);
  }, 30);
});

//$("#twitter").on("click", function () {
//	alert("Жени, моля не ми намалявай оценката заради неработещия линк. Нямат акаунт в twitter, но пък бутончето е толкова симпатично, че реших да си го запазя :)");
//});
////I am still working over this function in order to get it run....
//On click over the picture, the same picture should appear (with bigger size) in the .present element.
//On click wherever else in the body, the picture should disappear and the original content of the .present element should appear.
//

//showing images with bigger size and then hiding them - ORIGINAL
//var pictures = $(".img-1, .img-2").on("click", function () {
//	var parentDiv = $(this).closest('div.menu').hide();
//
//	var blownUpPic = $("<img>").attr({
//			id: 'pic',
//			src: this.src,
//			'data-parent': parentDiv.attr('id')
//		})
//		.appendTo("section")
//		.on('click', function () {
//			$('#' + $(this).attr('data-parent')).show();
//			$(this).remove();
//		});
//});

//showing images with bigger size and then hiding them - Jeni
$(".img-1, .img-2").click(function () {
  var container = $('#img-preview');
  // set the image as a background of the preview div
  container.css('background-image', 'url(' + $(this).attr('src') + ')');
  // the following is for responsiveness
  var windowHeight = $(window).outerHeight();
  container.css('top', window.pageYOffset + (windowHeight * 0.05) + 'px');
  container.css('bottom', window.pageYOffset + (windowHeight * 0.95) + 'px');
  container.outerHeight((windowHeight * 0.9) + 'px')
  // show the preview div
  container.removeClass('hidden');
});

// hiding the big image on click
$('#img-preview').click(function () {
  $(this).addClass('hidden');
});

//hamburger menu
$(".wrapper").on("click", function () {
  $(this).toggleClass("checked");
});

"use strict";

$(window).on("load", function () {
	$("div.menu:first-child").show();
});

$(".nav a").on("click", function () {
	$("div.menu").fadeOut(30);

	var targetDiv = $(this).attr("data-rel");
	setTimeout(function () {
		$("#" + targetDiv).fadeIn(30);
	}, 30);
});

//$("#twitter").on("click", function () {
//	alert("Жени, моля не ми намалявай оценката заради неработещия линк. Нямат акаунт в twitter, но пък бутончето е толкова симпатично, че реших да си го запазя :)");
//});

//showing images with bigger size and then hiding them
var pictures = $(".img-1, .img-2").on("click", function () {
	var parentDiv = $(this).closest('div.menu').hide();

	var blownUpPic = $("<img>").attr({
			id: 'pic',
			src: this.src,
			'data-parent': parentDiv.attr('id')
		})
		.appendTo("section")
		.on('click', function () {
			$('#' + $(this).attr('data-parent')).show();
			$(this).remove();
		});
});


//hamburger menu
$(".wrapper").on("click", function () {
	$(this).toggleClass("checked");
});
//
//$(".img-1, .img-2").on("click", function () {
//	$("menu").css("display", "block");
//	$(".menu").append("<div></div>").append("<img src='" + this.src + "'>").css("display", "none");
//	//	$("present").toggle();
//
//});
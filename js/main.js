(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

})(jQuery);



//B722B2DF3D9D1CC7C19BBC81D410AD65D9FF
function sendMail() {
	var name = document.getElementById("exampleFormControlInput1").value;
	var email = document.getElementById("exampleFormControlInput2").value;
	console.log(email);
	var body = document.getElementById("exampleFormControlTextarea1").value;
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "acqmiles@gmail.com",
		Password : "B722B2DF3D9D1CC7C19BBC81D410AD65D9FF",
		To : 'admin@gamemusicjam.org',
		From : "acqmiles@gmail.com",
		Subject : "GM JAM CONTACT FORM",
		Body : "FROM: " + name + " " + email + " MESSAGE: " + body
	}).then(
	  message => alert(message)
	);
}

function show() {
	if (document.getElementById("jam1").style.visibility == "visible") {
		document.getElementById("jam1").style.visibility = "hidden";
		document.getElementById("newMenu").style.visibility = "hidden";
	} else {
		document.getElementById("jam1").style.visibility = "visible";
	}
}
function show2020() {
	document.getElementById("newMenu").style.visibility = "visible";
	document.getElementById("topmenu").style.top = "96px";
	document.getElementById("menu1").textContent = "GM Jam '20";
	document.getElementById("menu1").href = "gmj20.html";
	document.getElementById("menu2").style.padding = "0px"
}
function show2021() {
	document.getElementById("newMenu").style.visibility = "visible";
	document.getElementById("topmenu").style.top = "62px";
	document.getElementById("menu1").textContent = "GM Jam '21";
	document.getElementById("menu1").href = "gmj21.html";
	document.getElementById("menu2").style.padding = "0px"
}
function show2022() {
	document.getElementById("newMenu").style.visibility = "hidden";
}
function showUpcoming() {
	document.getElementById("newMenu").style.visibility = "hidden";
}
var md = new MobileDetect(window.navigator.userAgent);
if (md.mobile() || md.tablet()) {
	document.location.href = 'mobile-home.html';
}

function openGame(year, name, people, tracklist, demolink, playlist) {
	sessionStorage.setItem("year", year);
	sessionStorage.setItem("name", name);
	// sessionStorage.setItem("people", year);
	// sessionStorage.setItem("tracklist", tracklist);
}
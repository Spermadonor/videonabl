import 'slick-carousel';
import '@fancyapps/fancybox';
import 'lazyYT/lazyYT.js';
function get_timer_794(string_was_794, string_sec_794) {
	var date_new_was_794 = new Date(string_was_794);
	var date_new_sec_794 = string_sec_794;
	var date_794 = new Date();
	var razn_794, left_794, left_n_794, vraz_794, ost_794;
	razn_794 = date_794 - date_new_was_794;
	left_794 = date_new_sec_794 - razn_794;
	if (left_794 > 0) {
		left_n_794 = left_794;
	} else {
		if (Math.abs(left_794) > date_new_sec_794) {
			vraz_794 = (Math.abs(left_794)) / date_new_sec_794;
			vraz_794 = vraz_794.toString().split(".");
			left_n_794 = Math.abs(left_794) - (vraz_794[0]) * date_new_sec_794;
			left_n_794 = date_new_sec_794 - left_n_794;
		} else {
			left_n_794 = date_new_sec_794 - Math.abs(left_794);
		}
	}
	ost_794 = left_n_794;
	var day_794 = parseInt(ost_794 / (60 * 60 * 1000 * 24));
	if (day_794 < 10) {
		day_794 = "0" + day_794;
	}
	day_794 = day_794.toString();
	var hour_794 = parseInt(ost_794 / (60 * 60 * 1000)) % 24;
	if (hour_794 < 10) {
		hour_794 = "0" + hour_794;
	}
	hour_794 = hour_794.toString();
	var min_794 = parseInt(ost_794 / (1000 * 60)) % 60;
	if (min_794 < 10) {
		min_794 = "0" + min_794;
	}
	min_794 = min_794.toString();
	var sec_794 = parseInt(ost_794 / 1000) % 60;
	if (sec_794 < 10) {
		sec_794 = "0" + sec_794;
	}
	sec_794 = sec_794.toString();
	var timethis_794 = day_794 + " : " + hour_794 + " : " + min_794 + " : " + sec_794;
	$(".timerhello_794 p.result .result-day").text(day_794);
	$(".timerhello_794 p.result .result-hour").text(hour_794);
	$(".timerhello_794 p.result .result-minute").text(min_794);
	$(".timerhello_794 p.result .result-second").text(sec_794);

}

function getfrominputs_794() {
	var string_was_794 = "Wed Feb 13 2019 23:41:00 GMT+0300 (Восточная Африка)";
	var string_sec_794 = "3600900";
	get_timer_794(string_was_794, string_sec_794);
	setInterval(function() {
		get_timer_794(string_was_794, string_sec_794);
	}, 1000);
}
$(document).ready(function() {
	getfrominputs_794();
});

function Validatecontact(theForm) {
    var tel = this.querySelector('[type="tel"]');
	var regexp;
	regexp = /^[-+]?\d*\.?\d*$/;
	if (!regexp.test(tel.value)) {
		alert("Введите номер телефона правильно!");
		tel.focus();
		return false;
	}
	if (tel.value == "") {
		alert("Введите номер телефона правильно!");
		tel.focus();
		return false;
	}
	if (tel.value.length < 7) {
		alert("Введите номер телефона правильно!");
		tel.focus();
		return false;
	}
	if (tel.value.length > 40) {
		alert("Введите номер телефона правильно!");
		tel.focus();
		return false;
	}
	return true;
}

$('form').submit(Validatecontact);
$('.fansy').click(function() {
	$.fancybox.open($('.modal .forma-zayvka'));
});


if (window.matchMedia("(max-width: 500px)").matches) {
	$('.otzivi .content-between .left-block').unwrap();
	$('.clienti .content-between .left-block').unwrap();
	$('.clienti .slick-sl .im-wrap').unwrap();
	$('.youtube .content-between .left-block').unwrap();

	$('.slick-sl').slick({
		dots: true
	});
} else {
  
}

$('.iframe').lazyYT();
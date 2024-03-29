import 'slick-carousel';
import '@fancyapps/fancybox';
import 'lazyYT/lazyYT.js';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Inputmask from "inputmask";
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

// Input masck
Inputmask("+7 (999) 999-99-99").mask("input[type='tel']");
// Send zaivka
$('form').submit(function() {
	var form = $(this);
	var error = false;
	var nameEl = form.find("input[name=name]");
	var name = nameEl.val().trim();
	if (name === '') {
		nameEl.css('border', '1px solid red');
		error = true;
	} else nameEl.removeAttr('style');
	var tel = form.find("input[type='tel']");
	var number = tel.val().trim();
	var reg = /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/;
	if(reg.test(number) == false) {
		tel.css('border', '1px solid red');
		error = true;
	} else tel.removeAttr('style');

	if (error) return false;

	$.ajax({
	    url: form.attr('action'),
	    method: 'post',
	    dataType: 'html',
	    data: {
	    		Name: name,
	    		Telefon: number,
	    		Zayavka: form.attr('name')
	    	}
	}).done(function(response) {
		$.fancybox.close($('.modal .forma-zayvka'));
		$.fancybox.open($('.modal .blagod'));
		$(this).trigger('reset');
    }).fail(function() {
    	$.fancybox.open($('.modal .blagod').html('При отправке формы произошла ошибка.'));
    });
	return false;
})

$('.fansy').click(function() {
	$.fancybox.open($('.modal .forma-zayvka'));
});


if (window.matchMedia("(max-width: 920px)").matches) {
	$('.otzivi .content-between .left-block').unwrap();
	$('.clienti .content-between .left-block').unwrap();
	$('.clienti .slick-sl .im-wrap').unwrap();
	$('.youtube .content-between .left-block').unwrap();

	$('.slick-sl').slick({
		dots: true,
		arrows: true
	});
}
$('.iframe').lazyYT();
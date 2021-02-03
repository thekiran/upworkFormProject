$('.menu-button').click(function () {
	$('.menu-mobile-toggle').css('display', 'block');
});
$('.menu-button-close').click(function () {
	$('.menu-mobile-toggle').css('display', 'none');
});

var w = $(window).width();
if (w > 991) {
	if ($('.left-sidebar').length) {
		var ls = $('.left-sidebar').offset();
		$(window).scroll(function () {
			var wo = $(window).scrollTop();
			if (wo >= ls.top) {
				$('.left-sidebar').addClass('fixed-sidebar');
			} else {
				$('.left-sidebar').removeClass('fixed-sidebar');
			}
		});
	}
}

$('#resume').click(function () {
	$('input[name="resume"]').click();
});
$('#cover-letter').click(function () {
	$('input[name="cover-letter"]').click();
});

$('.arrow-down').click(function () {
	$('html, body').animate({
		'scrollTop': $('#scroll-to').offset().top
	}, 2000);
});

$(window).scroll(function () {
	var wo = $(window).scrollTop();
	if (wo >= 350) {
		$('.upward-arrow').css('bottom', $("footer").height());
		$(".upward-arrow").css('opacity', '1');
	} else {
		$('.upward-arrow').css('opacity', '0')
	}
});
textTiping(w = window)
$(window).scroll(function () {
	var t = this;
	textTiping(this)
});

function goType(w = window) {
	$('h1 span').each(function (i, el) {
		var hT = $(el).offset().top,
			hH = $(el).outerHeight(),
			wH = $(window).height(),
			wS = $(w).scrollTop();
		if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
			var st = $(el).text();
			if (!st) {
				let dtc = $(el).attr('data-content');
				//$(el).text(dtc);

				var dataText = [dtc];

				// type one text in the typwriter
				// keeps calling itself until the text is finished
				function typeWriter(text, i, fnCallback) {
					// chekc if text isn't finished yet
					if (i < (text.length)) {
						// add next character to h1
						$(el).html(text.substring(0, i + 1) + '<span aria-hidden="true"></span>');

						// wait for a while and call this function again for next character
						setTimeout(function () {
							typeWriter(text, i + 1, fnCallback)
						}, 70);
					}
					// text finished, call callback if there is a callback function
					else if (typeof fnCallback == 'function') {
						// call callback after timeout
						setTimeout(fnCallback, 700);
					}
				}
				// start a typewriter animation for a text in the dataText array
				function StartTextAnimation(i) {
					if (typeof dataText[i] == 'undefined') {

						setTimeout(function () {
							$(el).find('span').css('display', 'none');
						}, 0);
						/*
						setTimeout(function() {
						  StartTextAnimation(0);
						}, 20000);
						*/
					}
					// check if dataText[i] exists
					if (i < dataText[i].length) {
						// text exists! start typewriter animation
						typeWriter(dataText[i], 0, function () {
							// after callback (and whole text has been animated), start next text
							StartTextAnimation(i + 1);
						});
					}					
				}
				// start the text animation
				StartTextAnimation(0);


				console.log(i + ' num on the view!');
			}
		}
	});
}
goType();

function textTiping(w = window) {
	$('.type-text').each(function (i, el) {
		var hT = $(el).offset().top,
			hH = $(el).outerHeight(),
			wH = $(window).height(),
			wS = $(w).scrollTop(),
			st = $(el).text();
		if (!st) {
			if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
				let dtc = $(el).attr('data-content');
				var dataTextt = [dtc];
				function typeWriterr(text, i, fnCallback) {
					if (i < (text.length)) {
						$(el).html(text.substring(0, i + 1) + '<span aria-hidden="true"></span>');
						setTimeout(function () {
							typeWriterr(text, i + 1, fnCallback)
						}, 50);
					} else if (typeof fnCallback == 'function') {
						setTimeout(fnCallback, 300);
					}
				}
				function StartTextAnimationn(i) {
					if (typeof dataTextt[i] == 'undefined') {
						$(el).find('span').css('display', 'none');
						$($(el).parent().parent().children()[2]).find('a').css('width', '40px');
						setTimeout(function () {
							$($(el).parent().parent().children()[2]).children().find('img').css('opacity', '1')
							setTimeout(function () {
								$($(el).parent().parent().children()[2]).find('span').css('opacity', '1')
							}, 200);
						}, 400);
					}
					if (i < dataTextt[i].length) {
						typeWriterr(dataTextt[i], 0, function () {
							StartTextAnimationn(i + 1);
						});
					}
				}
				StartTextAnimationn(0);
			}
		}
	});
}

AOS.init({
	easing: 'ease-in-quad',
});


var position = $(window).scrollTop();

$('#search').click(function () {
	$('.search-window').fadeIn();
	return false;
});
$('.btn-close').click(function () {
	$('.search-window').fadeOut();
	return false;
});

$('.categories-wrapp').change(function () {
	var id = $(this).val();
	if (id == 0) {
		$('.categories-tab').fadeIn('fast');
	} else {
		$('.categories-tab').fadeOut('fast').promise().done(function () {
			$('.categories-tab[data-id="' + id + '"]').fadeIn('fast');
		});
	}
});

$('.upward-arrow').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 600);
	return false;
})

$('.list-group-item').click(function () {
	showTabPanel(this)
})

$('#python-api').click(function () {
	$(".list-group-item").removeClass('active');
	$("#list-documentation-list").addClass('active');
	showTabPanel(this)
})

function showTabPanel(el) {
	$('body,html').animate({
		scrollTop: 0
	}, 300);
	var pane = $(el).data('topic');
	$(".show").removeClass('active');
	$(".show").removeClass('show');
	$("#" + pane).addClass('show');
	$("#" + pane).addClass('active');
}

$('.ion-close').click(function () {
	$('.advert').addClass('hide');
})

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
  }

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})
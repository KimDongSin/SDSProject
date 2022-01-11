// 배너 스와이프
var bannerSwiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 2200,
		disableOnInteraction: false,
	},
	loop: true,
});


// 모바일
const open = $('.mobile_menu');
const close = $('.mobile_close');
const mobile_bg = $('.mobile_bg');
const nav_wrapper = $('.nav_wrapper');



// 3단바 클릭
open.on('click', function () {
	mobile_bg.css({ 'opacity': '1', 'display' : 'block' });
	nav_wrapper.css({ 'right': '0px' });
});

// 닫기 클릭
$(document).on('click', '.mobile_bg, .mobile_close', function () {
	mobile_bg.css({ 'opacity': '0', 'display' : 'none' });
	nav_wrapper.css({ 'right': '-300px' });
});




// 하단 스와이프
var hospitalSwiper = new Swiper('.swiper-container3', {
	slidesPerView: 5,  // 보여지는 배너갯수
	spaceBetween: 5,  // 배너 간 간격
	loop: true,
	autoplay: {
		delay: 2200,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

















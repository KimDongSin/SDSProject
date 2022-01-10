// 필터
const volunteer_btn = $(".volunteer_btn");

// 탭 클릭
volunteer_btn.on('click', function () {
	volunteer_btn.removeClass('active');
	$(this).addClass('active');
});
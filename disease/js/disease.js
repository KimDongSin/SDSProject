// 필터
const volunteer_btn = $(".volunteer_btn");

// 탭 클릭
volunteer_btn.on('click', function () {
	volunteer_btn.removeClass('active');
	$(this).addClass('active');
});

//본인 질환 선택
const formToggle = $('.form_toggle');
const checkTitle = $('.check_title');

// 본인 질환 선택 토글
checkTitle.on('click', () => { formToggle.toggle() });


















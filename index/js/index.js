
// 탭
const healthy = $(".tab");

const leftTab = $('.volunteer_left_tab');
const rightTab = $('.volunteer_right_tab');


//본인 질환 선택
const formToggle = $('.form_toggle');
const checkTitle = $('.check_title');

// 탭 클릭
healthy.on('click', function () {
	
	$(".tab").removeClass('selected');
	$(this).addClass('selected');
	if ($(this).hasClass('healthy')) {
		leftTab.css({ 'display': 'block' });
		rightTab.css({ 'display': 'none' });
	} else {
		leftTab.css({ 'display': 'none' });
		rightTab.css({ 'display': 'block' });
	}
});

// 본인 질환 선택 토글
checkTitle.on('click', () => { formToggle.toggle() });
















$(function () {
	$('.xs-menu-ul li').click(function (){
		$('.xs-menu-ul li').css({
			background:'#333333',
			color:'white'
		});
		$(this).css({
			background:'#888888',
			color:'white'
		});
	});
	
	$('.dingdan-li').click(function () {
		$('.con-xs-title-dingdan').show();
		$('.xs-im-finishMenu').show()
		
		$('.con-xs-title-my12306').hide();
		$('.xs-im-my12306').hide()
	});
	
	$('.my12306-li').click(function () {
		$('.con-xs-title-dingdan').hide();
		$('.xs-im-finishMenu').hide()
		
		$('.con-xs-title-my12306').show();
		$('.xs-im-my12306').show()
	});
	
	
	//list界面

	$('.xs-list-down').click(function () {

		$(this).hide();
		$('.xs-list-ul li').eq($(this).parent().index()).children('.xs-list-up').show();
		
		$('.xs-list-ul li').eq($(this).parent().index()).children('.xs-list-station').slideDown();
	});
	
	
	$('.xs-list-up').click(function () {

		$(this).hide();
		$('.xs-list-ul li').eq($(this).parent().index()).children('.xs-list-down').show();
		
		$('.xs-list-ul li').eq($(this).parent().index()).children('.xs-list-station').slideUp();
	});
	
	$('.xs-list-ul li label').click(function () {
		$('.xs-list-pattern').hide();
		$('.xs-list-resure').show();
	});
	
	
	
	
	
	
	
	$('.chufa-focus-table td').click(function () {
		$('.chufa-place').val($(this).text());
	});
	$('.mudi-focus-table td').click(function () {
		$('.mudi-place').val($(this).text());
	});
})

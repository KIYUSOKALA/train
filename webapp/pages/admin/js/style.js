$(document).ready(function() {
	//购票界面
	$('.con-left-ul li').click(function () {
		$('.con-left-ul li').css({
			background:'#E0E0DE',
			color:'black'
		});
		$(this).css({
			background:'white',
			color:'#F38300'
		});
		if ($(this).index()==0)
		{
			$('.bus-ul').show();
			$('.train-ul').hide();
			$('.plane-ul').hide();
			$('.hotel-ul').hide();
			
			$('.con-left-ul li').eq(1).attr('src','img/goupiao-logo-2.png');
			$('.con-left-ul li').eq(2).attr('src','img/goupiao-logo-3.png');
			$('.con-left-ul li').eq(3).attr('src','img/goupiao-logo-4.png');
			$(this).attr('src','img/goupiao-logo-9.png');
		}
		else if ($(this).index()==1)
		{
			$('.train-ul').show();
			$('.bus-ul').hide();
			$('.plane-ul').hide();
			$('.hotel-ul').hide();
//			$('.huochepiao').attr('src','img/goupiao-logo-10.png')
			
			$('.con-left-ul li').eq(0).attr('src','img/goupiao-logo-1.png');
			$('.con-left-ul li').eq(2).attr('src','img/goupiao-logo-3.png');
			$('.con-left-ul li').eq(3).attr('src','img/goupiao-logo-4.png');
			$(this).attr('src','img/goupiao-logo-10.png');
		}
		else if ($(this).index()==2)
		{
			$('.plane-ul').show();
			$('.bus-ul').hide();
			$('.train-ul').hide();
			$('.hotel-ul').hide();
			
//			$('.con-left-ul li').eq(0).attr('src')='img/goupiao-logo-1.png';
//			$('.con-left-ul li').eq(1).attr('src')='img/goupiao-logo-2.png';
//			$('.con-left-ul li').eq(3).attr('src')='img/goupiao-logo-4.png';
//			$(this).attr('src','img/goupiao-logo-11.png');
		}
		else if ($(this).index()==3)
		{
			$('.hotel-ul').show();
			$('.bus-ul').hide();
			$('.train-ul').hide();
			$('.plane-ul').hide();
			
//			$('.con-left-ul li').eq(0).attr('src')='img/goupiao-logo-1.png';
//			$('.con-left-ul li').eq(1).attr('src')='img/goupiao-logo-2.png';
//			$('.con-left-ul li').eq(2).attr('src')='img/goupiao-logo-3.png';
//			$(this).attr('src','img/goupiao-logo-12.png');
		}
	});
	
	
	
	//table表  chufa-focus-table
//	$('.chufa-focus-table td').click(function (){
//		alert($('.chufa-focus-table td').val())
//		$('.chufa-place').attr('value',$('.chufa-focus-table td').val());
//	});
	
	$('.date').datetimepicker({
       format: "yyyy-mm-dd",
        autoclose: true,
//      format: "yyyy-mm-dd hh:ii",
      	autoclose: true,
     	todayBtn: true, 
     	minView: "month", //选择日期后，不会再跳转去选择时分秒
   	 	language:  'zh-CN',
    	autoclose: 1,
    });





	$('.chufa-place').focus(function () {
		$('.chufa-focus').show();
	});
	$('.chufa-place').blur(function () {
		setTimeout(function () {
			$('.chufa-focus').hide();
		},200)
	});
	$('.mudi-place').focus(function () {
		$('.mudi-focus').show();
	});
	$('.mudi-place').blur(function () {
		setTimeout(function () {
			$('.mudi-focus').hide();
		},200)
	});
	$('.date').focus(function () {
		$('.date-focus').show();
	});
	$('.date').blur(function () {
		$('.date-focus').hide();
	});
	
	
	
	
	//lise.html 界面
	$('.train-date ul li').mouseover(function () {
//		$(this).eq(10).css({
//			width:'10.7%'
//		})
		$('.train-date ul li ').css({
			width:'4.7%',
			background:'#ECECEC'
		})
		$(this).css({
			width:'10.7%',	
			background:'white',
			color:'#3391D0'
		})
	});
	
	
	$('.type-all').click(function () {
		$('.train-type input').attr("checked","true"); 
	});
	$('.station-all').click(function () {
		$('.station-type input').attr("checked","true"); 
	});
	
	
	//出发地 目的地
	$('.list-chufa-pattern').focus(function () {
		$('.chufa-focus').show();
	});
	$('.list-chufa-pattern').blur(function () {
		$('.chufa-focus').hide();
	});
	$('.list-mudi-pattern').focus(function () {
		$('.mudi-focus').show();
	});
	$('.list-mudi-pattern').blur(function () {
		$('.mudi-focus').hide();
	});
	
	$('.list-date-pattern').datetimepicker({
       format: "yyyy-mm-dd",
        autoclose: true,
//      format: "yyyy-mm-dd hh:ii",
      	autoclose: true,
     	todayBtn: true, 
     	minView: "month", //选择日期后，不会再跳转去选择时分秒
   	 	language:  'zh-CN',
    	autoclose: 1,
    });
	
	//点击列表显示价格
	$('.main-list table tbody').click(function () {
		if ($('.price-tr').eq($(this).index()-1).is(':hidden')) {
			$('.price-tr').eq($(this).index()-1).show()
		}
		else {
			$('.price-tr').eq($(this).index()-1).hide()
		}
		
	});
	
	//预定车票
	$('.yuding').click(function () {
		alert('预定')
	});
	
	//显示每个站
	$('.list-tr-a').click(function () {
		if ($('.list-station').eq($(this).index()-1).is(':hidden')) {
			$('.list-station').show()
		}
		else {
			$('.list-station').hide()
		}
	})
	
	
	
	
	
	//imformation界面
	$('.left-menu li').click(function () {
		$('.left-menu li').css({
			background: '#EEF1F8'
		})
		$(this).css({
			background:'white'
		})
	});
	
	
	//按乘车日期查询  按订票日期查询
	$('.date-sear').datetimepicker({
		 format: "yyyy-mm-dd",
        autoclose: true,
//      format: "yyyy-mm-dd hh:ii",
      	autoclose: true,
     	todayBtn: true, 
     	minView: "month", //选择日期后，不会再跳转去选择时分秒
   	 	language:  'zh-CN',
    	autoclose: 1
	})
	
	
	//已完成订单
	
	
	//跳转到已完成订单
	$('.list-finish').click(function () {
		$('.right-menu-mainPage').hide()
		$('.right-menu-lianxiren').hide()
		$('.right-menu-finish').show()
		$('.right-finish-tip').show()
	});
	
	
	$('.lishidingdan').click(function () {
		$('.detail-tickets').hide()
		$('.detail-pages').hide()
		
		$('.lishi-ul').show()
		$('.lishi-pages').show()
	});
	$('.weichuxingdingdan').click(function () {
		$('.detail-tickets').show()
		$('.detail-pages').show()
		
		$('.lishi-ul').hide()
		$('.lishi-pages').hide()
	});
	
	//历史订单的列表  （已完成订单）
	$('.lishi-ul li').click(function () {
		if ($('.lishi-li-table').eq($(this).index()).is(':hidden')) {
			$('.lishi-li-table').eq($(this).index()).show()
			$('.lishi-li-bottom').eq($(this).index()).show()
			
			$('.lishi-li-title ').eq($(this).index()).css({
				background:'#41BAE2',
				color:'white'
			})
		}
		else {
			$('.lishi-li-table').hide()
			$('.lishi-li-bottom').hide()
			
			$('.lishi-li-title ').css({
				background:'',
				color:'black'
			})
		}
	});
	
	
	
	//跳转到常用联系人
	$('.list-lianxiren').click(function () {
		$('.right-menu-finish').hide()
		$('.right-finish-tip').hide()
		$('.right-menu-mainPage ').hide()
		$('.right-menu-lianxiren').show()
		
	});
	
	$('.add-a').click(function () {
		$('.right-menu-lianxiren').hide()
		$('.right-menu-addLianxiren').show()
	})
	
	
	
	
	
});

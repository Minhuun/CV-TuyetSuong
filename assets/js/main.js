jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();

	$("#btn-detail").click(function(){
		$("#ul-detail").show(function(){
			$("#btn-detail").click(function(){
				$("#ul-detail").hide()
			});
		});
	})

	$("#btn-detail2").click(function(){
		$("#ul-detail2").show(function(){
			$("#btn-detail2").click(function(){
				$("#ul-detail2").hide()
			});
		});
	})

	$("#phone").click(function(){
		alert("Số điện thoại của tôi: 0949 170 014")
	})
});
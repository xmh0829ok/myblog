$(function(){
	$("#button-in").click(function(){
		$(".board1").fadeOut("fast",function(){
			$("#main-container").fadeIn("fast");
			$("#nav").show("fast");
			$("#return-top").show("fast");
		});
	})
}) 

$(function(){
	$("#pic-lfc").hover(function(){
		$("#caption-lfc").fadeIn("fast");
	}, function(){
		$("#caption-lfc").fadeOut("fast");
	})
})

$(function(){
	$("#pic-coldplay").hover(function(){
		$("#caption-coldplay").fadeIn("fast");
	}, function(){
		$("#caption-coldplay").fadeOut("fast");
	})
})

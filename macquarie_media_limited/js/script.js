//parallax
jQuery(function ($) {
	/* You can safely use $ in this code block to reference jQuery */



$('.VideoModal').on('hidden.bs.modal', function (e) {
            $('video').each(function() {
                this.pause();
            });
        });

        $('.VideoModal').on('shown.bs.modal', function (e) {
            $(this).find('video')[0].play();
        });
		
		


$(document).ready(function() {
		// Stop the video from playing
		// $('.VideoModal').on('hidden.bs.modal', function (e) {
		// 	    var Iframe = $(this);
		// 		var ThisIframe = Iframe.find('iframe');
		// 		var TYLink =Iframe.find('iframe').attr("src");
		// 	  	$(ThisIframe).attr("src", TYLink);
		// })

    setTimeout(function () {
        
    
	
	
	
	
	}, 800)

})
});
$(document).ready(function() {
	if(screen.width < screen.height) {
		//Mobile Screen
		$("#imagesContainer").append(' \
			<!-- 500pxWidget Mobile --> \
			<iframe \
				src="http://500pxwidget.com/in/?u=aGFyc2hpdHZzYXhlbmF8aW58MTUwfDJ8MTB8fG5vfDB8" \
				allowTransparency="true" \
				frameborder="0" \
				scrolling="no" \
				style="border:none; overflow:hidden; width:300px; height: 1500px;" > \
			</iframe>');
	} else {
		//Desktop Screen
		$("#imagesContainer").append(' \
			<!-- 500pxWidget Web --> \
			<iframe \
				src="http://500pxwidget.com/in/?u=aGFyc2hpdHZzYXhlbmF8aW58MjUwfDN8MTB8fG5vfDB8" \
				allowTransparency="true" \
				frameborder="0" \
				scrolling="no" \
				style="border:none; overflow:hidden; width:750px; height: 2500px" > \
			</iframe>');
	}
});

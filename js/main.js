$("#second").children().hide();
setTimeout(
  function() 
  {
	document.body.innerHTML = '<video id="bgvid" playsinline autoplay><source src="../img/background/opening.mp4" type="video/mp4"></video><div id="skip-button">Ignorer l\'introduction</div>' + document.body.innerHTML;
	var video = document.body.querySelector('video');
	var skip = document.body.querySelector('#skip-button');
	video.volume = 0.1;
	$("#first").delay(1000).fadeOut();
	skip.click(function() {
		document.body.removeChild(video);
		document.body.removeChild(skip);
   		$("#second").children().fadeIn();
	});
	$("#bgvid").on("ended", function() {
		document.body.removeChild(video);
   		$("#second").children().fadeIn();
	});
  }, 10000);
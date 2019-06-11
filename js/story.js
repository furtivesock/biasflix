window.bgVideo;
window.previousBgVideo;

$(document).on('showpassage:after', function() {

    // Reset 
    document.body.style.removeProperty('background-image');
    var video = document.body.querySelector('video');
    if (video)
        document.body.removeChild(video)

    // Aucun fond (fond noir par défaut)
    if (!window.bgVideo)
        return;

    // Si le fond est une vidéo de format .mp4 ou .webm
    if (window.bgVideo.includes(".mp4") || window.bgVideo.includes(".webm")) {
        if (window.bgVideo != window.previousBgVideo) {
            document.body.innerHTML = '<video id="bgvid" playsinline autoplay muted loop><source src="../img/background/' + window.bgVideo + '" type="video/mp4"></video>' + document.body.innerHTML;
            window.previousBgVideo = window.bgVideo;
        }
    } else {
        // Si le fond est une image
        if (window.bgVideo != window.previousBgVideo) {
            document.body.style.backgroundImage = "url(../img/background/" + bgVideo + ")";
            window.previousBgVideo = window.bgVideo;
        }
    }
});
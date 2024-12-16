// Линкове към радио станциите
var radios = [
    "https://e106-ts.cdn.bg/regstations/fls/Horizont.stream/playlist.m3u8", // БНР Хоризонт
    "https://e106-ts.cdn.bg/regstations/fls/Shumen.stream/playlist.m3u8", // БНР Шумен
    "https://play.global.audio/radio1128", // Радио 1
    "https://play.global.audio/radio1rock128", // Радио 1 Рок
    "https://play.global.audio/bgradio128", // БГ Радио
    "https://play.global.audio/veronika128", // Вероника
    "https://bss1.neterra.tv/veselina/stream_0.m3u8", // Веселина
    "https://bss1.neterra.tv/thevoicefm/stream_0.m3u8", // The Voice
    "https://play.global.audio/nrj128", // Energy
    "https://bravo.btv.bg/radio/njoy-radio-proxy/index.php", // N-Joy
    "https://play.global.audio/city128", // City
    "baby.mp3", // Fresh!
    "https://radio.rn-tv.com:8000/stream/1/" // Мая
]

var hls = new Hls({
    maxMaxBufferLength: 30,
    backBufferLength: 0,
});
var audioElement = document.createElement('audio');

function setupHLSPlayback(hls, hlsUrl) {
    const supportHLS = Boolean(audioElement.canPlayType("application/vnd.apple.mpegurl"));
    if (supportHLS) {
      audioElement.src = hlsUrl;
    } else {
      hls.loadSource(hlsUrl);
      hls.attachMedia(audioElement);
  }
}

$(document).ready(function(){
    $("select").change(function(){
        // име на избраното радио
        var radioname = $('#radios option:selected').val();
        
        audioElement.pause();
        if (hls != null) { hls.stopLoad(); hls.detachMedia(); }

        switch(radioname) {
            case "БНР Хоризонт": audioElement.src = ""; setupHLSPlayback(hls, radios[0]); break;
            case "БНР Шумен": audioElement.src = ""; setupHLSPlayback(hls, radios[1]); break;
            case "Радио 1": audioElement.src = radios[2]; break;
            case "Радио 1 Рок": audioElement.src = radios[3]; break;
            case "БГ Радио": audioElement.src = radios[4]; break;
            case "Вероника": audioElement.src = radios[5]; break;
            case "Веселина": audioElement.src = ""; setupHLSPlayback(hls, radios[6]); break;
            case "The Voice": audioElement.src = ""; setupHLSPlayback(hls, radios[7]); break;
            case "Energy": audioElement.src = radios[8]; break;
            case "N-Joy": audioElement.src = radios[9]; break;
            case "City": audioElement.src = radios[10]; break;
            case "Fresh!": audioElement.src = radios[11]; break;
            case "Мая": audioElement.src = radios[12]; break;
            // Радиото не е в списъка (не би трябвало да се случва)
            default: alert("Грешка!");
        }

        audioElement.volume=$('#slider').val()/100;
        audioElement.play();
    });

    $( ".slider" ).on('input change', function() { audioElement.volume=$('#slider').val()/100; });
});

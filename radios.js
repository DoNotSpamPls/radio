// Линкове към радиотата
var radios = [
    "http://stream.bnr.bg:8011/horizont.aac", // БНР Хоризонт
    "http://stream.bnr.bg:8033/radio-shumen.aac", // БНР Шумен
    "http://stream.radioreklama.bg/radio1128", // Радио 1
    "http://stream.radioreklama.bg/radio1rock128", // Радио 1 Рок
    "http://stream.radioreklama.bg/bgradio128", // БГ Радио
    "http://stream.radioreklama.bg/veronika128", // Вероника
    "https://bss.neterra.tv/rtplive/veselinaradio_live.stream/playlist.m3u8", // Веселина
    "https://bss.neterra.tv/rtplive/thevoiceradio_live.stream/playlist.m3u8", // The Voice
    "http://stream.radioreklama.bg/nrj128", // Energy
    "http://46.10.150.243/njoy.mp3", // N-Joy (зарежда по-бавно)
    "http://stream.radioreklama.bg/city128", // City
    "http://193.108.24.21:8000/fresh", // Fresh!
    "http://www.rnmediagroup.com:11000/;" // Мая
]

var audioElement = document.createElement('audio');
var hls = new Hls();

$(document).ready(function(){
    $("select").change(function(){
        // име на избраното радиото
        var radioname = $('#radios option:selected').val();

        switch(radioname) {
            case "БНР Хоризонт": audioElement.setAttribute('src', radios[0]); break;
            case "БНР Шумен": audioElement.setAttribute('src', radios[1]); break;
            case "Радио 1": audioElement.setAttribute('src', radios[2]); break;
            case "Радио 1 Рок": audioElement.setAttribute('src', radios[3]); break;
            case "БГ Радио": audioElement.setAttribute('src', radios[4]); break;
            case "Вероника": audioElement.setAttribute('src', radios[5]); break;
            // За тези две използваме hls.js поради m3u8 файловете
            case "Веселина": audioElement.setAttribute('src', ""); hls.loadSource(radios[6]); hls.attachMedia(audioElement); break;
            case "The Voice": audioElement.setAttribute('src', ""); hls.loadSource(radios[7]); hls.attachMedia(audioElement); break;
            case "Energy": audioElement.setAttribute('src', radios[8]); break;
            case "N-Joy": audioElement.setAttribute('src', radios[9]); break;
            case "City": audioElement.setAttribute('src', radios[10]); break;
            case "Fresh!": audioElement.setAttribute('src', radios[11]); break;
            case "Мая": audioElement.setAttribute('src', radios[12]); break;
            // Радиото не е в списъка (не би трябвало да се случва)
            default: alert("Грешка!");
        }

        audioElement.play();
    });

    $( ".slider" ).change(function() {
        var rawvolume = $('#slider').val();
        var volume = ("0." + rawvolume);

        switch(volume) {
            case "0": audioElement.volume=0; break;
            case "0.100": audioElement.volume=1; break;
            default: audioElement.volume=volume; break
        }

    });

    Защита от копиране!
    $(document).keydown(function (event) {
        return false;
    });

    $(document).on("contextmenu", function (e) {        
        e.preventDefault();
    });

    $("body").css("-webkit-user-select","none");
    $("body").css("-moz-user-select","none");
    $("body").css("-ms-user-select","none");
    $("body").css("-o-user-select","none");
    $("body").css("user-select","none");
});

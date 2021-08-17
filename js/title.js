if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 250);

}

var x = 0;

var titleText = ["🥀 -", "🥀 ?", "🥀 h", "🥀 he", "🥀 hen", "🥀 henk", "🥀 henke", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henkez", "🥀 henke", "🥀 henk", "🥀 hen", "🥀 he", "🥀 h", "🥀 .", "🥀 $"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}


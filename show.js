var show = document.getElementById('show');
var imgs = [...document.getElementsByClassName('layout-image')];
var showImage = document.getElementById('showImage');

img1.onclick = function() {
    show.style.display = 'block';
    showImage.src = this.src;
}

imgs.forEach(img => {
    img.onclick = function() {
        show.style.display = 'block';
        showImage.src = this.src;
    }
});

var zoom = "no";

showImage.onclick = function() {
    if(zoom == "no") {
        showImage.style.height = 'auto';
        showImage.style.cursor = 'zoom-out';
        zoom = "yes";
    }
    else if(zoom == "yes") {
        showImage.style.height = '100%';
        showImage.style.cursor = 'zoom-in';
        zoom = "no";
    }
}

var span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    if(zoom == "yes") {
        showImage.style.height = '100%';
        showImage.style.cursor = 'zoom-in';
        zoom = "no";
    }
    show.style.display = 'none';
}
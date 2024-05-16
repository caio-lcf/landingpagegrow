const imgs = document.getElementById;
const img = document.querySelectorAll ("#img img")

let idx = 0;

function carrosel () {
    idx++;

    if (idx > img.length - 1){ 
        idx = 0 ;
    }

    img.style.transform = 'translateX($(-idx *500)px)';

}

setInterval (carrosel, 1800);
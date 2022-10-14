
var navheight = document.getElementById('nav').clientHeight + document.getElementById('progressbar').clientHeight;

var scroll_timeline = document.body.scrollTop;


console.log(navheight);
function change_scroll_timeLine() {

    var winheight = document.documentElement.scrollHeight;
    var scrollPos = document.body.scrollTop

    scroll_timeline = scrollPos / winheight * 100;
    console.log(scroll_timeline);

    
};

function lenghthen_div(id, width){
    var target = document.getElementById(id);
    target.style.width = width + '%';
    console.log(id);
};

document.body.addEventListener('scroll', ()=>{
    change_scroll_timeLine();
    lenghthen_div('progressbar', scroll_timeline);
}
);

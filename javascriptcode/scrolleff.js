
var navheight = document.getElementById('nav').clientHeight + document.getElementById('progressbar').clientHeight;

var scroll_timeline = document.body.scrollTop;


function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


function change_scroll_timeLine() {

    
const scrollTop = document.body.scrollTop;
const scrollHeight = document.body.scrollHeight;
const clientHeight = document.body.clientHeight;

scroll_timeline = Math.floor(scrollTop / (scrollHeight - clientHeight) * 100 + 0.1)

var animatepart = document.getElementById('animate')
 const areVisible = checkVisible(animatepart);
 if (areVisible == true)  {
    console.log(animatepart.getBoundingClientRect());

    console.log(2>=4/2)
 };



   

};

function lenghthen_div(id, width) {
    var target = document.getElementById(id);
    target.style.width = width + '%';
};

document.body.addEventListener('scroll', () => {
    change_scroll_timeLine();
    lenghthen_div('progressbar', scroll_timeline);
}
);





const friends = ['Thang', 'Phat',   'Thao       ', 'Thai', 'Nghi', 'Yiii', 'Damn'] ;

const firstLetter = friends.map(friend => friend[0] + friend[1]);
console.log(firstLetter);



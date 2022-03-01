
//반응형 메뉴 클릭


const hamBtn = document.querySelector('#hammenu');
const menu = document.querySelector('nav ul');
const xBtn = document.querySelector('#xmenu');

hamBtn.addEventListener('click',function(){
    menu.style.transform = 'translateY(0%)';  
});
xBtn.addEventListener('click',function(){
    menu.style.transform = 'translateY(-100%)'; 
});

// 타이핑 모션

    
const typed = new Typed(".typed", {
    strings : ["Hellow! Now loading"],  //브라우저에 띄워줄 문구
    stringsElement : null,  //초기 공간을 비운다.
    typeSpeed : 100,  //타이핑 속도
    backSpeed : 100,  //backspace 속도
    smartBackspace : true,  //동일한 문구가 존재할 때, backspace로 제거못하도록 구성후, 다음 문장을 표현
    startDelay : 1000, //최초 타이핑 시간을 1초만큼 지연시킴
    backDelay : 1000, //이전문장을 모두 타이핑한 후, 1초 후 backspace가 진행되도록 구성
    loop : true,
    showCursor : true,
    cursorChar : "|"  //커서의 형태를 구성
});

// 스크롤 원텍스트
let Scroll = document.querySelector('#scroll');
let outterText= document.querySelector('.outterText')
let innerText= document.querySelector('.innerText')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    Scroll.style.clipPath = "circle("+ value +"px at center center)";
    outterText.style.left = 100 - value / 5 + '%';
    innerText.style.left = 100 - value / 5 + '%';

});


//tabs
let tabHeader = document.getElementsByClassName("tab_header")[0];
let tabIndicator = document.getElementsByClassName("tab_indicator")[0];
let tabBody = document.getElementsByClassName("tab_body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");

for(let i=0; i<tabsPane.length; i++){
    tabsPane[i].addEventListener("click",function(){
        
        tabHeader.getElementsByClassName("active")
        [0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")
        [0].classList.remove("active");
        tabBody.getElementsByTagName("div")
        [i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 4)*${i})`;
    });
}

///포폴 수동슬라이드
document.querySelector('.number1').addEventListener('click', function(){
    document.querySelector('#pofolbox_cont2').style.transform = 'translateX(0vw)';
});
document.querySelector('.number2').addEventListener('click', function(){
    document.querySelector('#pofolbox_cont2').style.transform = 'translateX(-100vw)';
});
document.querySelector('.number3').addEventListener('click', function(){
    document.querySelector('#pofolbox_cont2').style.transform = 'translateX(-200vw)';
});

///땡큐메세지닫기
const $tm = document.querySelector(".thankyou_message ");
const $close = document.querySelector(".thankyou_message .close");

$close.addEventListener("click", function(a){
    a.preventDefault();
    $tm.style.display="none";
});


let userHasScrolled = false;  
    window.addEventListener('scroll', (e) => {  
      userHasScrolled = true;  
      this.lastKnownScrollPosition = window.scrollY;
      console.log("lastKnownScrollPosition : ", this.lastKnownScrollPosition)
      if ($(window).scrollTop() > 500) {
        $("#up").css({'opacity':'1'});
      } else {
        $("#up").css({'opacity':'0'});
      }
    });



    // 로딩화면 페이드아웃
    $(window).on('load',function(){
        $('#loader_box').delay('4000').fadeOut();

    });
$(document).ready(function(){
    $("nav ul li ").click(function(e){
        e.preventDefault();
        const $rel=$(this).attr("rel");
        $("html, body").stop().animate({scrollTop:$("#"+ $rel).offset().top},1000);
    });
    $("#up").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },500); return false;
    });
}); 



/*
function row_scroll(){
$("#pofolbox_cont").on('mousewheel',function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta > 0){
        console.log("up");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }else{
    console.log("down");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
});
}
row_scroll();
*/



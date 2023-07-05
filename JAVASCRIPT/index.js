'use strict';

$(document).on('scroll', function(){
    if($(window).scrollTop()>800){
        $('header').addClass('header_change_color');
    }else{
        $('header').removeClass('header_change_color');
    }
});

const ham = document.querySelector('.ham_menu');
const hamline = document.querySelector('.btn_line');
const line01 = document.querySelector('.line01');
// const hamline02 = document.querySelector('.line02');

ham.addEventListener(
    'click', function(){
        hamline.classList.toggle('btn_line_clicked');
    }
);
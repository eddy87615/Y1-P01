'use strict';

$(document).on('scroll', function(){
    if($(window).scrollTop()>700){
        $('header').addClass('header_change_color');
    }else{
        $('header').removeClass('header_change_color');
    }
});

const ham = document.querySelector('.ham_menu');
const hamline = document.querySelector('.btn_line');
const menuBody = document.querySelector('.menu_body');

ham.addEventListener(
    'click', function(){
        hamline.classList.toggle('btn_line_clicked');
        menuBody.classList.toggle('menu_body_clicked');
    }
);
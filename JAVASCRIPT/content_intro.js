'use strict';

const ham = document.querySelector('.ham_menu');
const hamline = document.querySelector('.btn_line');
const menuBody = document.querySelector('.menu_body');

ham.addEventListener(
    'click', function(){
        hamline.classList.toggle('btn_line_clicked');
        menuBody.classList.toggle('menu_body_clicked');
    }
);

$(".back_top").click(function(){
    $("html, body").animate({ scrollTop: 0}, "slow")
});
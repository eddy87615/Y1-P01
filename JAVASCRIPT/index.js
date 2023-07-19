'use strict';

$(document).on('scroll', function(){
    if($(window).scrollTop()>500){
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



// for( let i = 0; i < 100; i++){
//     setTimeout(function(){
//         console.log(Date());
//     },1000*i
//     );
// }

$(document).on('scroll', function(){
    if($(window).scrollTop()>600){
        $('.Web_design').addClass('Web_design_show');
    }else{
        $('.Web_design').removeClass('Web_design_show');
    }
});

$(document).on('scroll', function(){
    if($(window).scrollTop()>800){
        $('.Web_learning').addClass('Web_learning_show');
    }else{
        $('.Web_learning').removeClass('Web_learning_show');
    }
});

$(document).on('scroll', function(){
    if($(window).scrollTop()>1000){
        $('.intro_test').addClass('intro_test_show');
    }else{
        $('.intro_test').removeClass('intro_test_show');
    }
});
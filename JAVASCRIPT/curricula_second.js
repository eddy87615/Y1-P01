'use strict';

//-----folder-----//

$(document).ready(function() {
    $('.content > ul > li > h3').click(function(event) {
        event.preventDefault();
      //把this以外的都隱藏起來，找自己的父層，再往下找子層的ul選單，將打開的ul選單全部slideUp()收闔起來
        $(this).parent().siblings().find('ul').slideUp();
      //將自己的ul，判斷做摺疊效果
        $(this).parent().find('ul').slideToggle();
    });
});

//-----menu-----//

const ham = document.querySelector('.ham_menu');
const hamline = document.querySelector('.btn_line');
const menuBody = document.querySelector('.menu_body');

ham.addEventListener(
    'click', function(){
        hamline.classList.toggle('btn_line_clicked');
        menuBody.classList.toggle('menu_body_clicked');
    }
);



// // 获取所有的ul元素
// var ulElements = document.querySelectorAll('ul');

// // 创建额外的div元素
// var additionalDiv = document.createElement('div');
// additionalDiv.id = 'popupDiv';

// // 设置额外div元素的样式
// additionalDiv.style.position = 'fixed';
// additionalDiv.style.bottom = '0';
// additionalDiv.style.left = '0';
// additionalDiv.style.width = '100%';
// additionalDiv.style.background = 'rgba(0, 0, 0, 0.8)';
// additionalDiv.style.color = '#fff';
// additionalDiv.style.padding = '10px';
// additionalDiv.style.transition = 'transform 0.3s ease-in-out';
// additionalDiv.style.transform = 'translateY(100%)';

// // 将额外div元素添加到body中
// document.body.appendChild(additionalDiv);

// // 绑定点击事件
// ulElements.forEach(function(ulElement) {
//   ulElement.addEventListener('click', function(event) {
//     // 检查点击的是ul元素
//     if (event.target.tagName.toLowerCase() === 'ul') {
//       // 获取点击ul元素内第一个li元素的内容
//       var liContent = event.target.querySelector('li').innerHTML;

//       // 设置额外div元素的内容
//       additionalDiv.innerHTML = liContent;

//       // 显示额外div元素
//       setTimeout(function() {
//         additionalDiv.style.transform = 'translateY(0)';
//       }, 100);

//       // 点击额外div元素时隐藏它
//       additionalDiv.addEventListener('click', function() {
//         additionalDiv.style.transform = 'translateY(100%)';
//         setTimeout(function() {
//           additionalDiv.innerHTML = ''; // 清空内容
//         }, 300);
//       });
//     }
//   });
// });
'use strict';
//-----folder-----//
// $(document).ready(function() {
//     $('.content > ul > li > h3').click(function(event) {
//         event.preventDefault();
//       //把this以外的都隱藏起來，找自己的父層，再往下找子層的ul選單，將打開的ul選單全部slideUp()收闔起來
//         $(this).parent().siblings().find('ul').slideUp();
//       //將自己的ul，判斷做摺疊效果
//       $(this).parent().find('ul').slideToggle();

//       // $(this).toggleClass("span_open_content");
//     });
// });

const all_containers = document.getElementsByClassName("container_of_class");

function closeAllContainer(curr){
  for ( let index = 0; index < all_containers.length; index++ ){
    if( curr != index){
      all_containers[index].getElementsByTagName("ul")[0].style.display = "none";
      all_containers[index].getElementsByTagName("span")[0].classList.remove("span_open_content");
    };
  };
};

for ( let index = 0; index < all_containers.length; index++ ){

  all_containers[index].addEventListener(
    'click', function(){
      closeAllContainer(index);

      if(all_containers[index].getElementsByTagName("ul")[0].style.display == "block"){
        all_containers[index].getElementsByTagName("span")[0].classList.remove("span_open_content");
        all_containers[index].getElementsByTagName("ul")[0].style.display = "none"
      }else{
        all_containers[index].getElementsByTagName("span")[0].classList.add("span_open_content");
        all_containers[index].getElementsByTagName("ul")[0].style.display = "block";
      }
    }
  )
}

closeAllContainer(-1);

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
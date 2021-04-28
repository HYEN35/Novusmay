// [참고] https://www.w3schools.com/howto/howto_html_include.asp

function includeHTML(callback) {
  var z, i, elmnt, file, xhr;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("data-html");
    //console.log(file);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("data-html");
          includeHTML(callback);
        }
      };
      xhr.open("GET", file, true);
      xhr.send();
      /*exit the function:*/
      return;
    }
  }
  include_nav_menu();
}

// include 페이지 로드 후 최초 menu 이벤트
function include_nav_menu(){
  var $this = $('.category').attr('data-name');
  var $href = $('li>a[href="./'+ $this +'.html"]');

  $href.addClass('click');

  if($href.parents('.sub_wrap')){
    $href.parents('.sub_wrap').removeClass('off').addClass('on');
    $('.sub_wrap.on>ul').show();
    $href.parents('.sub_wrap').children('.main_menu').addClass('click');
    $href.parents('.sub_wrap').find('.i_arr').removeClass('off').addClass('on');
  }
  console.log($href);
}
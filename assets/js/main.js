function scrollto(scroll){
    var offsetTop = $('#' + scroll).offset().top;

    if (offsetTop) {
      $('html,body').animate({
        scrollTop: offsetTop
      }, 300);
      return false;
    }
  
}
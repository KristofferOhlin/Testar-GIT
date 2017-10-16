/*TRANSLATE*/

$(function(){
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, element) {
      $(this).text(argLang[0][lang][$(this).attr('key')]);
    });
  });
});

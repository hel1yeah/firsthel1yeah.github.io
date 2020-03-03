// настройка карточки регион 
// при клике на div region у divа region-back появляеться класс show
// а у  divа region появляеться класс hide
$(function(){
  $('.region').on('click', function () {
    $('.region-back').toggleClass('show')
    $('.region').toggleClass('hide')
  });  
});
// зеркальная ситуация при клике на div  .region-back отбераем класс hide у divа region и у divа .region-back отбераем класс show
$(function(){
  $('.region-back').on('click', function () {
    $('.region').toggleClass('hide')
    $('.region-back').toggleClass('show')
  });  
});
// конец настройки карточки регион
//=============================================
// по анологии с первым 
$(function(){
  $('.beast').on('click', function () {
    $('.beast-back').toggleClass('show')
    $('.beast').toggleClass('hide')
  });  
});
$(function(){
  $('.beast-back').on('click', function () {
    $('.beast').toggleClass('hide')
    $('.beast-back').toggleClass('show')
  });  
});
//==============================================
// по анологии с первым 
$(function(){
  $('.time').on('click', function () {
    $('.time-back').toggleClass('show')
    $('.time').toggleClass('hide')
  });  
});
$(function(){
  $('.time-back').on('click', function () {
    $('.time').toggleClass('hide')
    $('.time-back').toggleClass('show')
  });  
});
//==============================================
// по анологии с первым 
$(function(){
  $('.patient').on('click', function () {
    $('.patient-back').toggleClass('show')
    $('.patient').toggleClass('hide')
  });  
});
$(function(){
  $('.patient-back').on('click', function () {
    $('.patient').toggleClass('hide')
    $('.patient-back').toggleClass('show')
  });  
});
//==============================================
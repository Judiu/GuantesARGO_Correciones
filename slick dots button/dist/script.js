$('.slider').slick({
  infinite: true,
  dots: true,
  arrows: false
}).on('afterChange', function(event, slick, currentSlide, nextSlide){  
  debugger;
  $('.newDot .center ul,.newDot .left ul,.newDot .right ul').html('');
  var current = null;
  $('.slider .slick-dots li').each(function(arg1,arg2){
    if($(this).hasClass('slick-active')){
      current = true;
      $(this).clone().appendTo('.newDot .center ul');
      return
    }
    if(current){
      $(this).clone().appendTo('.newDot .right > ul.slick-dots');
    }
    else{
      $(this).clone().appendTo('.newDot .left ul');
    }
  });
  $('.newDot ul li').click(function(){
    mycusomMove(this);
  });
});

//Break the navigation
$("<div class='newDot slider slick-initialized slick-slider slick-dotted'><div class='left'><ul class='slick-dots'></ul></div><div class='center'><ul class='slick-dots'></ul></div> <div class='right'><ul class='slick-dots'></ul></div>").insertAfter('.slick-dotted')
//appending 
$('.slick-dots li').clone().appendTo('.newDot .right ul');
$('.newDot .slick-dots .slick-active').appendTo('.newDot .center ul');
$('.newDot ul li').click(function(){
    mycusomMove(this);
  });
function mycusomMove(obj){
  var number = parseInt($(obj).children('button').attr('aria-label').split(' ')[0]) -1;
  $('.slider .slick-dots li').eq(number).children('button').trigger('click');
}
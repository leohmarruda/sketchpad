let lines = 30;
let cols = 4;

$(document).ready(function () {

  generateCanvas();

  $('#New').on('click', function () {
     $('.canvas').find('.square').remove();
     $('.canvas').find('br').remove();
     generateCanvas();
  });
});

function generateCanvas () {
  lines=$('#rows').val();
  cols=$('#cols').val();
  for (let line=0; line<lines; line++) {
    for (let col=0; col<cols; col++)
      $('.canvas').append('<div class="square">&nbsp;</div>');
    $('.canvas').append('<br>');
  }
  $('.square').css({width:(800/cols)+'px','line-height':(800/lines)+'px'});

  $('.square').on('mouseover', function () {
     let r = Math.random()*255;
     let g = Math.random()*255;
     let b = Math.random()*255;
     $(this).css({background:'rgb('+r+','+g+','+b+')' });
  });
}

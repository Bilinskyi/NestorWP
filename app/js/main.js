
$(document).ready(function(){

  var flag = true;
  var flag2 = true;
  // var text = $('.prepend .text-bg');
  // var textbefore = $('.logo-wrapp .text-bg');
  $(window).on('load resize', function() {

    var like = $('.wrapp-likebar');
    if (window.innerWidth < 768) {
      if (flag) {
        flag = false;
        flag2 = true;
        $('.section-contact .container').append(like); 
      } 
    } else {
      flag = true;
      if (flag2) {
        flag2 = false;
        $('.link-mail-lg').after($('.wrapp-likebar'));
      }
    }

  });

  $('.m-h-1').matchHeight();

  var someDate = new Date();
  var numberOfDaysToAdd = 1;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

  var dd = someDate.getDate();
  var mm = someDate.getMonth() + 1;
  var y = someDate.getFullYear();

  var monthNames = [ "січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня" ];
  console.log(monthNames[mm-1]);
  var someFormattedDate = '<i>'+dd+'</i>' + ' '+ monthNames[mm-1];
  $('.date').html(someFormattedDate);

// $('#slider-1').bxSlider({
// 		controls: true, 
// 		pager: false,
// 		slideWidth: 940,
// 		minSlides: 4,
// 		maxSlides: 4,
// 		moveSlides: 1
// 	});

// $("#owl-demo").owlCarousel({
//       navigation : true, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem: false,
//       items: 4,
//       pagination : true,
//       itemsDesktop : [1920,4],
//       navigationText: false,
//       // autoPlay: 20000,
//       // "singleItem:true" is a shortcut for:
//       // items : 1, 
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
//     mouseDrag : false,
//     touchDrag : false

//   });  

 //    $("a.modal-form").fancybox({
 //       'hideOnContentClick': true,
 //          minWidth : 230,
 //          padding : 0,
 //          closeBtn : true
 
 // });

// $('header a[href^="#"]').on('click', function(event) {

//     var target = $( $(this).attr('href') );

//     if( target.length ) {
//         event.preventDefault();
//         $('html, body').animate({
//             scrollTop: target.offset().top -85
//         }, 600);
//     }

// });



//  jQuery(function($){ 
//    $(".phone_mask_1").mask("+7(999) 999-9999");
//    $("#phone_mask_2").mask("+7(999) 999-9999");
// });

$('input,textarea').focus(function(){
 $(this).data('placeholder',$(this).attr('placeholder'))
 .attr('placeholder','');
}).blur(function(){
 $(this).attr('placeholder',$(this).data('placeholder'));
});

});
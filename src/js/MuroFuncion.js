import $ from "jquery";
//ignore the first 13lines,the trick here is all about tracking the element till it comes into the view, by measuring height and stuff of both window screen and the element itself, its that simple, muhammad khairy
$(function () {
$('.insta').clone().appendTo('.a1');
    $('.a1:first').find('.post img').attr('src','https://goo.gl/pnYKzy')
    $('.a1:first').find('.caption span').text('Khitma partner');
    $('.a1:eq(1)').find('.post img').attr('src','https://goo.gl/ebVC6W')
    $('.a1:eq(1)').find('.caption span').text('Sip your coffee quite silently Get lost into some appealing books pages');
    $('.a1:eq(2)').find('.post img').attr('src','https://goo.gl/CtfVAj')
    $('.a1:eq(2)').find('.caption span').text('Cupcakes can perform rites of pilgrimage too ');
    $('.a1:eq(3)').find('.post img').attr('src','https://goo.gl/Ch5atv')
    $('.a1:eq(3)').find('.caption span').text('Rest in Peace Ya Narges');
    $('.a1:eq(4)').find('.post img').attr('src','https://goo.gl/ZpfGSf');
    $('.a1:eq(4)').find('.caption span').text('I promised I will never compose poems on your eyes .. but I did');
$(window).on('scroll resize', function holy_nob() {
    var    wh = $(window).height();
    var    wt = $(window).scrollTop();
    var    wb = (wt + wh);
    var    rbj = $('.lil-bar');
    var    ft = $('.footer-cont');
    var    ft_t = ft.offset();
    var    ft_h = ft.height();
    var    tof  = (ft_t + ft_h);
    var    fol  = (ft_h + 15);
   if(wb >= tof){
            rbj.css('bottom',fol);
        }else{
           rbj.css('bottom','15px');}
    $('.fade-scroll').each(function(){
        var   element = $(this);
        var    el_h = element.height();
        var    el_t = element.offset();
        var    el_b = (el_t + el_h);
        if((el_b > wt) && (el_t < wb)){
            element.addClass('animation');
        }
        else {
      element.removeClass('animation');
    }
          if (wt > el_t) {
      element.css('opacity', 1-(wt - el_t)/850);
    }
         if(wt > 10) {$('.navbar').addClass('navfar').find('span').addClass('mini')
                      $('.fa-instagram').addClass('bisc');
                             }

    else{
        $('.navbar').removeClass('navfar');
        $('.navbar span').removeClass('mini');
        $('.fa-instagram').removeClass('bisc');
    }
    });
});
     $('.list-order, .collapse').on('click',function() {
       $('.list').toggleClass('animate');
        $('.list-order').toggleClass('ba');
    });
  $("a[href='#']").click(function(e){
    e.preventDefault();
  });
}); //end

$(document).click(function(e) {
	if (!$(e.target).is('.panel-body')) {
    	$('.collapse').collapse('hide');
    }
});

import $ from "jquery";
//ignore the first 13lines,the trick here is all about tracking the element till it comes into the view, by measuring height and stuff of both window screen and the element itself, its that simple, muhammad khairy
$(function () {
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

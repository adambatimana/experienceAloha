$(document).ready(function(){
     
     //dynamic to top button
     var offset = 20;
     var duration = 500;
     //  when the browser wondow is scrolling
     $(window).scroll(function(){
          //check to see if the scrolling from top is greater than 20
          if($(this).scrollTop()>offset){
               //if it is, fade in the button
               $('.dynTop').fadeIn(duration);
               //otherwise fade out the button
          }else{
                $('.dynTop').fadeOut(duration);
           }//closes conditional
          }); //closes scroll
     //add animation to the scrolling up
     $('.dynTop').click(function(evt){
          evt.preventDefault();
          $('html, body').animate({scrollTop:0}, duration);
          return false;
     }); //closes click event

}); //closes doc ready
/*scrollTo*/

$(document).ready( function () {
   $('#a').click(function() {
     $('html,body').animate({scrollTop: $("#aa").offset().top}, 'slow'      );
   });
})

$(document).ready( function () {
   $('#b').click(function() {
     $('html,body').animate({scrollTop: $("#bb").offset().top}, 'slow'      );
   });
})

$(document).ready( function () {
   $('#c').click(function() {
     $('html,body').animate({scrollTop: $("#cc").offset().top}, 'slow'      );
   });
})

$(document).ready( function () {
   $('#d').click(function() {
     $('html,body').animate({scrollTop: $("#dd").offset().top}, 'slow'      );
   });
})
/*Animation navbar scroll*/
$(function() {
    var navigation = $(".navigation");
    var item = $(".item");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            navigation.addClass("change");
        } else {
            navigation.removeClass("change");
        }
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
            item.addClass("scrollitem");
        } else {
            item.removeClass("scrollitem");
        }
    });
});

/*loader page*/

$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");;
});

/*Animation FadeIn Scroll*/

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});



/**Cookies**/

// $(function(){
//
//   //Change these values
//   var msg = "We use cookies to enhance your web browsing experience. By continuing to browse the site you agree to our policy on cookie usage.";
//   var closeBtnMsg = "OK";
//   var privacyBtnMsg = "Privacy Policy";
//   var privacyLink = "https://www.google.com";
//
//   //check cookies
//   if(document.cookie){
//    var cookieString = document.cookie;
//    var cookieList = cookieString.split(";");
//    // if cookie named OKCookie is found, return
//    for(x = 0; x < cookieList.length; x++){
//      if (cookieList[x].indexOf("OKCookie") != -1){return};
//    }
//   }
//
//   var docRoot = document.body;
//   var okC = document.createElement("div");
//   okC.setAttribute("id", "okCookie");
//   var okCp = document.createElement("p");
//   var okcText = document.createTextNode(msg);
//
//   //close button
//   var okCclose = document.createElement("a");
//   var okcCloseText = document.createTextNode(closeBtnMsg);
//   okCclose.setAttribute("href", "#");
//   okCclose.setAttribute("id", "okClose");
//   okCclose.appendChild(okcCloseText);
//   okCclose.addEventListener("click", closeCookie, false);
//
//   //privacy button
//   var okCprivacy = document.createElement("a");
//   var okcPrivacyText = document.createTextNode(privacyBtnMsg);
//   okCprivacy.setAttribute("href", privacyLink);
//   okCprivacy.setAttribute("id", "okCprivacy");
//   okCprivacy.appendChild(okcPrivacyText);
//
//   //add to DOM
//   okCp.appendChild(okcText);
//   okC.appendChild(okCp);
//   okC.appendChild(okCclose);
//   okC.appendChild(okCprivacy);
//   docRoot.appendChild(okC);
//
//   okC.classList.add("okcBeginAnimate");
//
//   function closeCookie(){
//     var cookieExpire = new Date();
//     cookieExpire.setFullYear(cookieExpire.getFullYear() +2);
//     document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
//     docRoot.removeChild(okC);
//   }
//
// })();

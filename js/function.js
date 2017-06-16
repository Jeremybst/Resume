(function() {

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);

        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('.scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });

    }

 })();

/*Animation navbar scroll*/
$(function() {
    var navigation = $(".navigation");
    var item = $(".item");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 15) {
            navigation.addClass("change");
        } else {
            navigation.removeClass("change");
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

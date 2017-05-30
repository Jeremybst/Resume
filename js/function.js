/*Animation navbar scroll*/
$(function() {
    var navigation = $(".navigation");
    var item = $(".item");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 550) {
            navigation.addClass("change");
        } else {
            navigation.removeClass("change");
        }
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 550) {
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

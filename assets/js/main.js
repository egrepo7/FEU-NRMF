$(function() {

    //cache window object
    var $window = $(window);

    // Parallax background effect 
    $('section[data-type="background]').each(function() {

        var $bgobj = $(this) //assign the object

        $(window).scroll(function() {

            // scroll the background at var speed
            // the yPos is a negative value because it is scrolling UP

            var yPos = -($window.scrollTop() / $bgObj.data('speed'));

            // put together final bg position
            var coords = '50% ' + yPos + 'px';

            // move background
            $bgobj.css({ backgroundPosition: coords });


        }); //end scroll

    });

});
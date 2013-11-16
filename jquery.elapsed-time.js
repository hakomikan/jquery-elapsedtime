(function ( $ ) {

    $.fn.showElapsedTime = function () {
        return $(this).each(function(){
            var startTime = new Date($(this).attr('data-start-time'));

            var currentElement = $(this);

            setInterval(function() {
                var endTime = new Date();
                var elapsedTime = endTime.getTime() - startTime.getTime();
                var seconds = parseInt(elapsedTime / 1000) % 60;
                var minutes = parseInt(elapsedTime / 1000 / 60) % 60;
                var hours = parseInt(elapsedTime / 1000 / 60 / 60) % 24;
                var days = parseInt(elapsedTime / 1000 / 60 / 60 / 24)

                var text = sprintf("%02d:%02d", minutes, seconds);
                if ( 0 < hours ) {
                    text = sprintf("%02d:", hours) + text;
                }
                if ( 0 < days ) {
                    text = sprintf("%dd ", days) + text;
                }
                currentElement.html(text);

            }, 1000);
        });
    };

})(jQuery);

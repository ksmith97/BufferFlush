(function($) {
    $.fn.insultor = function( options ) {
        
        var settings = $.extend({
            interval: 5000,
            url: "/insult"
        }, options),
        changeInsult = function(element) {
            $.ajax({ 
                url: settings.url,
                dataType: "text",
                error: function() {
                    console.log("An error occured in calling " + settings.url);
                },
                success: function(data) {
                    $(element).text(data);
                    setTimeout( function(){changeInsult(element);}, settings.interval );
                }
            })
        };
        
        return this.each(function() {
            var $this = this;
            setTimeout(function(){changeInsult($this);}, settings.interval);
        });
    };
}(jQuery));

$(document).ready(function(){ $("#message").insultor({url: "/getInsult"}); })
;(function($){
    $.fn.extend({
        border:function(borderValue){
            if(arguments.length === 1){
               this.css("border",borderValue);
           }
           else if(arguments.length === 0){
               return this.css("border");
           }
           return this;
        },
        createRectangle:function(opts){
            var _default = {
                width:300,
                height:100,
                background:"red"
            };
            opts = $.extend(_default,opts);
            $("<div></div>").css({
                width:opts.width,
                height:opts.height,
                background:opts.background
            }).appendTo(this);
            return this;
        }
    });
})(jQuery);

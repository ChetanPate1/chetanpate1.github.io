;(function($){
    'use strict';

    $.fn.parallaxCard = function(options){
        var settings = $.extend({
            tolerance: 30
        }, options );

        var $window = $(window);

        return this.each(function(){
            var $this = $(this);
            var width = $this.width();
            var height = $this.height();
            var offset = $this.offset();

            $window.on('resize', function(){
                offset = $this.offset();
            });

            $this.on('mouseenter', function(){
                $this.on('mousemove', function(e){

                    var relativeX = (e.pageX - offset.left);
                    var relativeY = (e.pageY - offset.top);
                    var calcX = Math.round( ( height/2 - relativeY ) / settings.tolerance );
                    var calcY = Math.round( ( -width/2 + relativeX ) / settings.tolerance );

                    $this.css({
                        '-webkit-transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)',
                        '-moz-transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)',
                        '-ms-transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)',
                        '-o-transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)',
                        'transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)'
                    });
                });
            });

            $this.on('mouseleave', function () {
                $this.css({
                    '-webkit-transform': 'rotateX(0deg) rotateY(0deg)',
                    '-moz-transform': 'rotateX(0deg) rotateY(0deg)',
                    '-ms-transform': 'rotateX(0deg) rotateY(0deg)',
                    '-o-transform': 'rotateX(0deg) rotateY(0deg)',
                    'transform': 'rotateX(0deg) rotateY(0deg)'
                });
            });
        });
    }

}(jQuery));

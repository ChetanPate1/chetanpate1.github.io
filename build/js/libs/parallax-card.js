/*
* Parallax Cards v2.1
* 02-02-2017
* Chetan Patel
*/

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

         this.addEventListener('touchmove', onMove, false);
         this.addEventListener('touchend', onLeave, false);

         $window.on('resize', function(){
            offset = $this.offset();
         });

         function onStart(e){
            e.preventDefault();
         }

         function onMove(e){
            e.preventDefault();
            var pageX = e.pageX || e.touches[0].pageX;
            var pageY = e.pageY || e.touches[0].pageY;

            var relativeX = (pageX  - offset.left);
            var relativeY = (pageY - offset.top);
            var calcX = Math.round( ( height/2 - relativeY ) / settings.tolerance );
            var calcY = Math.round( ( -width/2 + relativeX ) / settings.tolerance );

            $this.css({
               '-webkit-transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)',
               'transform': 'rotateX(' + calcX +'deg) rotateY('+ calcY + 'deg)',
               'will-change': 'transform'
            });
         }

         function onLeave() {
            $this.css({
               '-webkit-transform': 'rotateX(0deg) rotateY(0deg)',
               'transform': 'rotateX(0deg) rotateY(0deg)',
               'will-change': 'intial'
            });
         }

         $this.on('mouseenter', onStart);
         $this.on('mousemove', onMove);
         $this.on('mouseleave', onLeave);
      });
   }

}(jQuery));

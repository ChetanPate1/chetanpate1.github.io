/*
 * Expand Image v2.0
 * 20-08-2015
 * Chetan Patel
 */
;(function($){
    'use strict';

    $.fn.expandImage = function(){
        var $body = $('body');
        var $window = $(window);
        var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

        return this.each(function(){
            var $this = $(this);

            $this.on('click',function(){
                var clone = $this.clone().addClass('clone').appendTo('body');
                var underlayHTML = $('<div class="underlay"><div class="loading"></div></div>');
                var src = $this.attr('src');
                var imgName = src.match(/.*\/(.*)$/)[1];
                var largeImgPath = 'images/lg/' + imgName;

                $body.addClass('no-scroll');
                $this.css({'opacity':'0'});

                $body.append(underlayHTML);

                $('.underlay').append('<img src="'+ largeImgPath +'">');

                $('.underlay img').load(function(){
                    $('.underlay img').css({'opacity':'0'});
                });

                var browserHeight = $window.height();
                var browserWidth = $window.width();
                var thumbnailHeight = $this.height();
                var thumbnailWidth = $this.width();
                var cloneScaleTo = (browserWidth/thumbnailWidth).toFixed(2);
                var underlayCSS = {'opacity':'1', 'width': '100%', 'height': 'auto'};
                var picLandscape = thumbnailHeight < thumbnailWidth;

                if(browserHeight < browserWidth) {
                    cloneScaleTo = (browserHeight/thumbnailHeight).toFixed(2);
                    underlayCSS = {'opacity':'1', 'width': 'auto', 'height': '100%'};
                }

                if(browserWidth/browserHeight > 1 && picLandscape){
                    cloneScaleTo = ((browserWidth)/thumbnailWidth).toFixed(2);
                    underlayCSS = {'opacity':'1', 'width': '100%', 'height': 'auto'};
                }

                if(browserWidth/browserHeight > 1.7 && picLandscape){
                    cloneScaleTo = ((browserHeight)/thumbnailHeight).toFixed(2);
                    underlayCSS = {'opacity':'1', 'width': 'auto', 'height': '100%'};
                }

                var fixedTopPos = 0.5*(browserHeight - thumbnailHeight);
                var fixedLeftPos = 0.5*(browserWidth - thumbnailWidth);
                var absoluteTopPos = $this.offset().top - $window.scrollTop();
                var absoluteLeftPos = $this.offset().left;
                var animateToX = (fixedLeftPos - absoluteLeftPos).toFixed(0);
                var animateToY = (fixedTopPos - absoluteTopPos).toFixed(0);

                var translate = 'translateX('+ animateToX +'px)'+' '+'translateY('+ animateToY +'px)'+' '+'scale('+ cloneScaleTo +')';

                clone.css({
                    'z-index': '5050',
                    'position':'fixed',
                    'width': thumbnailWidth+'px',
                    'left': absoluteLeftPos+'px',
                    'top': absoluteTopPos+'px',
                    'opacity':'1',
                    '-webkit-transform': translate, '-moz-transform': translate,
                    '-ms-transform': translate, '-o-transform': translate,
                    'transform': translate
                })
                .one(transitionEnd, function() {
                    $('.underlay img').css(underlayCSS);
                });

                $('.underlay').on('click', function(){
                    $('.underlay').empty().remove();
                    clone.css({
                        '-webkit-transition-duration': '0.3s', '-moz-transition-duration': '0.3s',
                        '-ms-transition-duration': '0.3s', '-o-transition-duration': '0.3s',
                        'transition-duration': '0.3s',
                        '-webkit-transition-timing-function': 'ease', '-moz-transition-timing-function': 'ease',
                        '-ms-transition-timing-function': 'ease', '-o-transition-timing-function': 'ease',
                        'transition-timing-function': 'ease',
                        'z-index':'3000',
                        'opacity':'1',
                        '-webkit-transform': 'scale(1)', '-moz-transform': 'scale(1)',
                        '-ms-transform': 'scale(1)', '-o-transform': 'scale(1)',
                        'transform': 'scale(1)'
                    })
                    .one(transitionEnd, function() {
                        clone.remove();
                        $this.css({'opacity':'1'});
                        $body.removeClass('no-scroll');
                    });
                });

                $window.on('resize', function(){
                    clone.remove();
                    $('.underlay').remove();
                    $this.css({'opacity':'1'});
                    $body.removeClass('no-scroll');
                });
            });
        });
    }

}(jQuery));

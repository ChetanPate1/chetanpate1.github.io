var $window = $(window);

$window.on('resize', function(){
    resetSide();
});

var side = {
    1: 'close',
    2: 'close',
    3: 'close',
    4: 'close',
    5: 'close',
    6: 'close',
    7: 'close'
};

var createSide = function (){
    var card = {}, close;

    for(var i = 1; i <= 7; i++){
        close = 57*(i - 1) + 'px';

        card[i] = {
            '-webkit-transform':'translate(0, '+ close +')',
            '-moz-transform':'translate(0, '+ close +')',
            '-ms-transform':'translate(0, '+ close +')',
            '-o-transform':'translate(0, '+ close +')',
            'transform':'translate(0, '+ close +')',
            'z-index': i*500
        };
    }

    return card;
};

var $sidebar_items = $('#sidebar-nav .dropdown-container');

function resetSide(){
    $sidebar_items.removeClass('open');

    side = {
        1: 'close',
        2: 'close',
        3: 'close',
        4: 'close',
        5: 'close',
        6: 'close',
        7: 'close'
    };


    for(var i = 1; i <= 7; i++){
        $('#sidebar-nav li:nth-child('+ i +')').css(createSide()[i]);
    }

}
resetSide();


$sidebar_items.on('tap', function(){
    var $this = $(this);
    var $thisIndex = $this.index();

    if (side[$thisIndex + 1] == 'open'){

        resetSide();

    }else {
        resetSide();
        $this.addClass('open');
        side[$thisIndex + 1] = 'open';

        for(var i = $thisIndex + 2; i <= 7; i++){

            var height_and_content = $this.height() - 57;
            var from = 57*(i - 1);
            var moveTo = height_and_content + from +'px';

            $('#sidebar-nav li:nth-child('+ i +')').css({
                '-webkit-transform':'translate(0, '+ moveTo +')',
                '-moz-transform':'translate(0, '+ moveTo +')',
                '-ms-transform':'translate(0, '+ moveTo +')',
                '-o-transform':'translate(0, '+ moveTo +')',
                'transform':'translate(0, '+ moveTo +')'
            });
        }
    }

});


//transparent
var $navbar = $('.navbar-fixed-top');

$window.on('scroll', function(){
    $(this).scrollTop() > 50 ? $navbar.removeClass('transparent') : $navbar.addClass('transparent');
});
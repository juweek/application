var windowTop, windowHeight, steps = [], chartHeight;
init();
bindings();


function init() {
    this.onScroll();
}

function getSteps() {
    $('.body__text-step').each(function(i, el) {
        steps.push($(el).attr('data-step'));
    }.bind(this));

}

function bindings() {
    $(window).scroll(function() {
        this.onScroll();
    }.bind(this));

    $(document).on('input', '#myRange', function() {
        var num = 50 / $(this).val();
        var bruh = -.7;
        $('.raindrop__fixed').each(function(i, el) {
            setTimeout( function(){
                $(el).css('animation', 'raindrop ' + num + 's linear infinite');
                $(el).css('animation-delay', bruh + 's');
                bruh = bruh - .4;
            },200);
        }.bind(this));
    });
}

function onScroll() {
    this.updateValues();
    this.setStep();
}

function updateValues() {
    windowTop = window.pageYOffset || document.documentElement.scrollTop;
    windowHeight = $(window).height();
}

function fixMap() {
    if (windowTop > $('.body__text-start').offset().top - this.percentageOfHeight(5)) {
        $('.intro2').css('display', 'block');
    } else {
        $('.intro2').css('display', 'none');
    }
}

function setStep() {
    var stepToShow = null;
    $('.body__text-step').each(function(i, el) {
        if (windowTop > $(el).offset().top - this.percentageOfHeight(85)) {
            stepToShow = $(el).data('step');
        }
    }.bind(this));
    this.highlightStates(stepToShow);
}

function highlightStates(currentStep) {
    switch (currentStep) {

        case 0:
        $('.scene__0').addClass('image__shown');
        $('.scene__1').addClass('image__shown');
        $('.scene__2').removeClass('image__shown');
        break

        case 1:
        $('.scene__2').addClass('image__shown');
        $('.scene__3').removeClass('image__shown');
        $('.scene__1').removeClass('image__shown');
        $('.ball__fixed, .notes__fixed').removeClass('half__shown');
        break

        case 1.5:
        $('.scene__0').addClass('image__shown');
        $('.ball__fixed, .notes__fixed').addClass('half__shown');
        //$('.scene__2').removeClass('image__shown');
        $('.scene__4').removeClass('image__shown');
        $('.scene__5').removeClass('image__shown');
        $('.scene__2').addClass('image__shown');
        break

        case 2:
        $('.scene__4').addClass('image__shown');
        $('.scene__3').removeClass('image__shown');
        $('.scene__5').removeClass('image__shown');
        $('.scene__0').removeClass('image__shown');
        break

        case 3:
        $('.scene__7').addClass('image__shown');
        $('.scene__4').removeClass('image__shown');
        $('.scene__6').removeClass('image__shown');
        $('.scene__5').removeClass('image__shown');

        $('.cloud__fixed').css('opacity', '0');
        break

        case 4:
        $('.scene__5').addClass('image__shown');
        $('.scene__0').removeClass('image__shown');
        $('.scene__4').removeClass('image__shown');
        $('.scene__6').removeClass('image__shown');
        $('.scene__3').removeClass('image__shown');
        $('.scene__2').removeClass('image__shown');
        $('.scene__2').removeClass('half__shown');
        break

        case 5:
        $('.scene__6').addClass('image__shown');
        $('.scene__7').removeClass('image__shown');
        $('.scene__5').removeClass('image__shown');
        break

        default:
        $('.scene__0').removeClass('image__shown');
        $('.scene__1').removeClass('image__shown');
        $('.young__fixed').css('opacity', '0');
    }
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}

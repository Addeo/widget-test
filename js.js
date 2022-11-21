var W_SLIDER_CONTROLLER = function( el ){
    if (!this instanceof W_SLIDER_CONTROLLER)
        return new W_SLIDER_CONTROLLER( el );

    var $el = $( el );
    if(!$el[0]){
        console.error("Cannot find any Webflow Slider present!");
        return;//exit
    }

    var _self = this;
    _self.$el = $el;
    _self.$slides = $el.children('.w-slider-mask').children('.w-slide');
    _self.$nav = $el.children('.w-slider-nav').children('.w-slider-dot');

    _self.$el.attr('data-status', 'initialized');

    return this;
};

W_SLIDER_CONTROLLER.prototype.count = function(){
    return this.$slides.length;
}

W_SLIDER_CONTROLLER.prototype.current = function(){
    return this.$nav.filter('.w-active').index() + 1
}

W_SLIDER_CONTROLLER.prototype.prev = function(){
    var tgt =  this.current() - 1;
    if(tgt > this.count())
        tgt = 0;
    else if(tgt < 0)
        tgt = this.count();

    this.goto( tgt );
};

W_SLIDER_CONTROLLER.prototype.next = function(){
    var tgt = this.current();
    if(tgt > this.count())
        tgt = 0;
    else if(tgt < 0)
        tgt = this.count();

    this.goto( tgt );
};

W_SLIDER_CONTROLLER.prototype.goto = function( index ){
    $(this.$el).trigger('W_BEFORE_SLIDE');

    $(this.$nav[index]).trigger('tap');

    $(this.$el).trigger('W_ON_SLIDE');
};

W_SLIDER_CONTROLLER.prototype.setup = function(action){
    var _self = this;

    switch(action){
        case 'drag_disabled':
            // http://forum.webflow.com/t/disable-dragging-for-sliders/3225/6
            Webflow.push(function() {
                _self.$el.off('swipe');
            });
            break;
        case 'infinite_loop':
            // http://forum.webflow.com/t/disable-dragging-for-sliders/3225/6
            Webflow.push(function() {
                $('.w-slider').off('mousedown.w-slider touchstart.w-slider');
            });
            break;
    }

}

var allCommentButtonElements = $(".w-slide-comment-button");
console.log(allCommentButtonElements)

for (let btn of allCommentButtonElements) {
    console.log(btn)
    btn.click(function(){
        $("#btn").after(" <br/r> " + "Click on me to remove");
    });
}



var allCommentButtonElements = $("._w-slide-comment-button");
console.log(allCommentButtonElements)

for (let btn of allCommentButtonElements) {
    console.log(btn)
    btn.click(function(){
        console.log(btn.id)
    });
}



console.log('slider script')
var Webflow = Webflow || [];
Webflow.push(function() {

    var W_SLIDER_CONTROLLER = function( el ){
        if (!this instanceof W_SLIDER_CONTROLLER)
            return new W_SLIDER_CONTROLLER( el );

        var $el = $( el );
        if(!$el[0]){
            console.error("Cannot find any Webflow Slider present!");
            return;//exit
        }

        $el.on('swipe', function() {
            alert('Data changed to:');
        });

        console.log($el)
        var _self = this;
        _self.$el = $el;
        _self.$slides = $el.children('.w-slider-mask').children('.w-slide');
        _self.$nav = $el.children('.w-slider-nav').children('.w-slider-dot');
        _self.$el.attr('data-status', 'initialized');

        _self.$nav.classChange((el, newClass) => console.log(` had its class updated to: newClass}`));

        $('.w-slider-dot').on('classChange', function(){
            console.log('classChange')
        });

        return this;
    };

    W_SLIDER_CONTROLLER.prototype.count = function(){
        return this.$slides.length;
    }

    W_SLIDER_CONTROLLER.prototype.current = function(){
        return this.$nav.filter('.w-active').index() + 1
    }

    W_SLIDER_CONTROLLER.prototype.prev = function(){
        var tgt =  this.current() - 1;
        if(tgt > this.count())
            tgt = 0;
        else if(tgt < 0)
            tgt = this.count();

        this.goto( tgt );
    };

    W_SLIDER_CONTROLLER.prototype.next = function(){
        var tgt = this.current();
        if(tgt > this.count())
            tgt = 0;
        else if(tgt < 0)
            tgt = this.count();

        this.goto( tgt );
    };

    W_SLIDER_CONTROLLER.prototype.goto = function( index ){
        $(this.$el).trigger('W_BEFORE_SLIDE');

        $(this.$nav[index]).trigger('tap');

        $(this.$el).trigger('W_ON_SLIDE');
    };

    W_SLIDER_CONTROLLER.prototype.setup = function(action){
        var _self = this;

        switch(action){
            case 'drag_disabled':
                // http://forum.webflow.com/t/disable-dragging-for-sliders/3225/6
                Webflow.push(function() {
                    _self.$el.off('swipe');
                });
                break;
            case 'infinite_loop':
                // http://forum.webflow.com/t/disable-dragging-for-sliders/3225/6
                Webflow.push(function() {
                    $('.w-slider').off('mousedown.w-slider touchstart.w-slider');
                });
                break;
        }

    }
    var slider = new W_SLIDER_CONTROLLER('#testimonial-custom-slider');


    var nextButton = $('.next-button');
    console.log(nextButton)
    console.log(slider)

    $(nextButton).on('click', function(){
        var button = this;
        console.log(button.id)
        const index = button.id[button.id.length - 1]
        console.log(index)
        slider.goto(index - 1)
        console.log(slider.$slides)
        console.log(slider.$nav)

    });
});
const btn = $('.w-slider-dot');
const options = {
    attributes: true
}

function callback(mutationList, observer) {
    mutationList.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            console.log('mutation')
        }
    })
}

const observer = new MutationObserver(callback)
observer.observe(btn, options)

















console.log('slider script')
var Webflow = Webflow || [];
Webflow.push(function() {

    var W_SLIDER_CONTROLLER = function (el) {
        if (!this instanceof W_SLIDER_CONTROLLER)
            return new W_SLIDER_CONTROLLER(el);

        var $el = $(el);
        if (!$el[0]) {
            console.error("Cannot find any Webflow Slider present!");
            return;//exit
        }

        $el.on('swipe', function () {
            alert('Data changed to:');
        });

        console.log($el)
        var _self = this;
        _self.$el = $el;
        _self.$slides = $el.children('.w-slider-mask').children('.w-slide');
        _self.$nav = $el.children('.w-slider-nav').children('.w-slider-dot');
        _self.$el.attr('data-status', 'initialized')

        return this;
    };

    W_SLIDER_CONTROLLER.prototype.count = function () {
        return this.$slides.length;
    };

    W_SLIDER_CONTROLLER.prototype.current = function () {
        return this.$nav.filter('.w-active').index() + 1
    };

    W_SLIDER_CONTROLLER.prototype.prev = function () {
        var tgt = this.current() - 1;
        if (tgt > this.count())
            tgt = 0;
        else if (tgt < 0)
            tgt = this.count();

        this.goto(tgt);
    };

    W_SLIDER_CONTROLLER.prototype.next = function () {
        var tgt = this.current();
        if (tgt > this.count())
            tgt = 0;
        else if (tgt < 0)
            tgt = this.count();

        this.goto(tgt);
    };

    W_SLIDER_CONTROLLER.prototype.goto = function (index) {
        $(this.$el).trigger('W_BEFORE_SLIDE');

        $(this.$nav[index]).trigger('tap');

        $(this.$el).trigger('W_ON_SLIDE');
    };

    W_SLIDER_CONTROLLER.prototype.setup = function (action) {
        var _self = this;

        switch (action) {
            case 'drag_disabled':
                // http://forum.webflow.com/t/disable-dragging-for-sliders/3225/6
                Webflow.push(function () {
                    _self.$el.off('swipe');
                });
                break;
            case 'infinite_loop':
                // http://forum.webflow.com/t/disable-dragging-for-sliders/3225/6
                Webflow.push(function () {
                    $('.w-slider').off('mousedown.w-slider touchstart.w-slider');
                });
                break;
        }

     };

    var slider = new W_SLIDER_CONTROLLER('#testimonial-custom-slider');

    var nextButton = $('.next-button');

    $(nextButton).on('click', function () {
        var button = this;
        const index = button.id[button.id.length - 1]
        slider.goto(index - 1)
    });

    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log(mutation.target.ariaLabel);
            if (mutation.target.ariaLabel && mutation.target.ariaLabel[11]) {
                console.log(mutation.target.ariaLabel[11])
                let targetButton = '.next-button-' + mutation.target.ariaLabel[11]
                if (mutation.target.classList.length > 1) {
                    $(targetButton).classList.add('.lottie-animation-9')
                } else {
                    $(targetButton).classList.remove(['.lottie-animation-9'])
                }
            }
        });
    });
    var targets = document.getElementsByClassName(".w-slider-dot");

    for (let target of targets) {
        console.log(target.ariaHidden)
        console.log(target.classList.includes)
    }

    Array.from(targets).forEach(target => {
        mutationObserver.observe(target, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    });
})



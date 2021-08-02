StarWars = (function(){

    // construtor
    function StarWars(args){
        this.elements = $(args.elements);

        // playing opening soundtrack
        this.bgm = this.elements.find('audio').get(0);

        // starting animation
        this.start = this.elements.find('.starwars-start');

        // animation wrapper
        this.animation = this.elements.find('.starwars-animation');

        // removes animation and shows start screen
        this.reset();

        // starting animation as we click on start button
        this.start.bind('click', $.proxy(function(){
            this.start.hide();
            this.bgm.play();
            this.elements.append(this.animation);
        }, this));

        // restart animation and show start button
        $(this.bgm).bind('ended', $.proxy(function(){
            this.bgm.currentTime = 0;
            this.reset();
        }, this));
    }

    StarWars.prototype.reset = function(){
        this.start.show();
        this.cloned = this.animation.clone(true);
        this.animation.remove();
        this.animation = this.cloned;
    };

    return StarWars;
})();

// star wars class instance
new StarWars({
    elements: '.starwars'
});
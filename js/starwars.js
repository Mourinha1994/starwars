StarWars = (function(){

    //construtor
    function StarWars(args){
        this.elementos = $(args.elementos);

        //tocando o audio da abertura
        this.bgm = this.elementos.find('audio').get(0);

        //iniciando a animação
        this.iniciar = this.elementos.find('.starwars-start');

        //wrapper da animação
        this.animacao = this.elementos.find('.starwars-animation');

        //remove a animação e mostra a tela de inicio
        this.reset();

        //iniciar a animação ao clicar na tela de inicio
        this.iniciar.bind('click', $.proxy(function(){
            this.iniciar.hide();
            this.bgm.play();
            this.elementos.append(this.animacao);
        }, this));

        //reiniciar a animação e mostrar a tela de inicio
        $(this.bgm).bind('ended', $.proxy(function(){
            this.bgm.currentTime = 0;
            this.reset();
        }, this));
    }

    StarWars.prototype.reset = function(){
        this.iniciar.show();
        this.cloned = this.animacao.clone(true);
        this.animacao.remove();
        this.animacao = this.cloned;
    };

    return StarWars;
})();

//instanciando a classe StarWars
new StarWars({
    elementos: '.starwars'
});
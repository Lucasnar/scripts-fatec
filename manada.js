function Animal(){
}

Animal.prototype = {
    fazerBarulho: function() {
        throw "Erro: funcao nao implementada";
    }
};

function Cao() {
}

function Gato(){
}

var CaoPrototype = new Animal();
var GatoPrototype = new Animal();

CaoPrototype.fazerBarulho = function() {
    return "Au";
}

GatoPrototype.fazerBarulho = function() {
    return "Miau";
}

Cao.prototype = CaoPrototype;
Gato.prototype = GatoPrototype;

function Manada(){
    this.animais = [];

    this.adicionar = function(animal) {
        this.animais.push(animal);
    };
}

Manada.prototype = {
    barulhos: function(){
        throw "Erro: funcao nao implementada";
    }
}

function ManadaVirgula(){
}

function ManadaSustenido(){
}

ManadaVirgulaPrototype = new Manada();
ManadaSustenidoPrototype = new Manada();

ManadaVirgulaPrototype.barulhos = function() {
      var barulhos = [];
        this.animais.forEach(function(animal){
                barulhos.push(animal.fazerBarulho());
                  });
          return barulhos.join(', ');
};

ManadaSustenidoPrototype.barulhos = function() {
      var barulhos = [];
        this.animais.forEach(function(animal){
                barulhos.push(animal.fazerBarulho());
                barulhos.push(animal.fazerBarulho());
                  });
          return barulhos.join('# ');
};

ManadaVirgula.prototype = ManadaVirgulaPrototype;
ManadaSustenido.prototype = ManadaSustenidoPrototype;


var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cao(), new Gato()];

animais.forEach(function (animal) {
      manadaVirgula.adicionar(animal);
      manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());

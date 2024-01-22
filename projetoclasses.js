class jogo {
    constructor(nome,idade,tipo){
        this.nomePersonagem = nome
        this.idadePersonagem = idade
        this.classePersonagem = tipo
    }
    perfil(){
        console.log(`O personagem tem o nome de ${this.nomePersonagem} e tem idade de ${this.idadePersonagem} e esta na classe ${this.classePersonagem}.`)
        
    }
    atacar(){
        let ataque = ""
        
        if(this.classePersonagem == "guerreiro"){
            ataque = "espada"
        }
        else if(this.classePersonagem == "mago" ){
            ataque ="magia" 
        }
        else if(this.classePersonagem == "monge"){
            ataque = "artes marciais "
        }
        else if(this.classePersonagem == "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.classePersonagem} atacou usando ${ataque}.`)
    }
}
//personagem 1:
let primeiroPersonagem = new jogo ("Arthur",28,"guerreiro")
primeiroPersonagem.perfil()
primeiroPersonagem.atacar()

//personagem 2:
let segundoPersonagem = new jogo ("jack",45,"mago")
segundoPersonagem.perfil()
segundoPersonagem.atacar()
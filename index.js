//Calculadora de partidas Rankeadas
//O Que deve ser utilizado: Funções (function)

main()

function main(){
    const frase = ["O Herói tem saldo de " , " está no nivel de "]
	let resultado = saldo(43,10)

function saldo(vit,der){
    let calculo = vit - der

    if(vit < 10){
    	console.log(frase[0] + calculo + frase[1] + "Ferro")
    } else if (vit > 11 && vit < 20){
    	console.log(frase[0] + calculo + frase[1] + "Bronze")
    }   else {}

    switch (vit > 21 && vit <50) {
        case true:
          console.log( frase[0] + calculo + frase[1] + "Prata")
          break;
        case false:
            if(vit > 51 && vit < 80){
                 console.log( frase[0] + calculo + frase[1] + "Ouro")
            }	else if (vit > 81 && vit < 90)
                	console.log( frase[0] + calculo + frase[1] + "Diamante")
          break;
    default:
}
if(vit > 91 && vit < 100){
    console.log( frase[0] + calculo + frase[1] + "Lendario")
}
else if (vit >= 101){
        console.log( frase[0] + calculo + frase[1] + "Imortal")
}
    }
        }








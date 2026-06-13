function verificarTemperatura(leituras){
    let soma = 0;

    for(let l of leituras){
        soma += l;
    }

    const media = soma / leituras.length;

    if(media > 70){
        return `Média térmica: ${media.toFixed(2)}°C - LIGAR RESFRIAMENTO`;
    }else{
        return `Média térmica: ${media.toFixed(2)}°C - Sistema térmico estável`;
    }
}

module.exports = verificarTemperatura;

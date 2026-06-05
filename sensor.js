function verificarTemperatura(leituras) {
    let soma = 0;

    for (let i = 0; i < leituras.length; i++) {
        soma += leituras[i];
    }

    const media = soma / leituras.length;

    if (media > 70) {
        return `Média térmica: ${media.toFixed(2)}°C - LIGAR RESFRIAMENTO`;
    } else {
        return `Média térmica: ${media.toFixed(2)}°C - Sistema térmico estável`;
    }
}

module.exports = verificarTemperatura;

console.log(
    verificarTemperatura([68, 72, 74, 71, 75])
);

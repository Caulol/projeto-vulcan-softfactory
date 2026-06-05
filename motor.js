function verificarMotor(velAtual, aceleracao) {
    let velFinal = velAtual + aceleracao;
    
    if (velFinal <= 100) {
        return `Velocidade final: ${velFinal} km/h - Sistema Seguro`;
    } else {
        return `Velocidade final: ${velFinal} km/h - ALERTA DE SOBRECARGA`;
    }
}
module.exports = verificarMotor
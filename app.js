const verificarMotor = require("./motor");
const analisarTemperatura = require("./sensores");

// Dados de teste
const dadosMotor = verificarMotor(80, 30);

const temperaturas = [68, 72, 75, 70, 73];
const dadosSensores = analisarTemperatura(temperaturas);

console.log("=================================");
console.log("      PAINEL DE TELEMETRIA");
console.log("=================================");

console.log("\n[MOTOR]");
console.log(`Velocidade Final: ${dadosMotor.velFinal}`);
console.log(`Status: ${dadosMotor.status}`);

console.log("\n[SENSORES TÉRMICOS]");
console.log(`Média de Temperatura: ${dadosSensores.media.toFixed(2)}°C`);
console.log(`Ação: ${dadosSensores.resfriamento}`);

console.log("\n=================================");
console.log("Fim do Relatório");
console.log("=================================");

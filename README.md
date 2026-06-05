# projeto-vulcan-softfactory

Equipe
Cauã Vitor – Líder (motor.js)
Integrante B – Sensores (sensores.js)
Integrante C – Aplicação Principal (app.js)

# Descrição do Projeto

O Projeto Vulcan simula o sistema de gerenciamento de uma frota de robôs industriais utilizados em linhas de montagem automatizada.

O objetivo é monitorar informações críticas do robô, como velocidade operacional e temperatura de funcionamento, permitindo identificar situações seguras ou potenciais riscos de sobrecarga e superaquecimento.

O sistema foi dividido em módulos independentes para reproduzir um ambiente corporativo de desenvolvimento colaborativo utilizando Git e GitHub.

#Escopo do Robô Industrial

O robô executa operações automatizadas de montagem e possui:
- Controle de velocidade do braço robótico;
- Monitoramento térmico por sensores;
- Sistema de alerta para sobrecarga;
- Sistema de recomendação de resfriamento.

# Tecnologias, Linguagens e Ferramentas Utilizadas
JavaScript (Node.js)
Git
GitHub
Visual Studio Code
Terminal / CLI
Funcionalidades
Módulo Motor
Recebe velocidade atual e aceleração;
Calcula velocidade final;
Informa se o sistema está seguro ou em sobrecarga.
Módulo Sensores
Recebe 5 leituras de temperatura;
Calcula a média térmica utilizando laço for;
Determina se o sistema de resfriamento deve ser ativado.
Aplicação Principal
Importa os módulos utilizando require;
Executa testes de funcionamento;
Exibe um painel de telemetria no terminal.

































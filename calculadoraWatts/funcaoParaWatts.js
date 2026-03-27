function watts() {
    let qtdWatts = parseFloat(prompt("Digite a quantidade de WATTS do eletrodoméstico digitado: "));
    let qtdHorasUso = parseInt(prompt("Digite o tempo de uso (em HORAS) diário do eletrodoméstico digitado: "));
    let consumoDiarioKWh = (qtdWatts * qtdHorasUso) / 1000;
    let valorPorKWh = parseFloat(prompt("Digite o custo por KWh: R$ "));
    let custoDiario = consumoDiarioKWh * valorPorKWh;

    alert(`***RESULTADOS DO ELETRODOMÉSTICO***
    
    NOME DO ELETRODOMÉSTICO: ` + eletrodomestico + 

    `
    \n-----------RESULTADOS POR DIA-----------
    CONSUMO DIÁRIO (KWh) : ` + consumoDiarioKWh + `KWh` + `
    CUSTO DIÁRIO levando em conta o valor por KWh digitado: R$ ` + custoDiario + 
    `
    \n-----------RESULTADOS POR MÊS-----------
    CONSUMO MENSAL (KWh) : ` + (consumoDiarioKWh * 30) + `KWh` + `
    CUSTO MENSAL levando em conta o valor por KWh digitado: R$ ` + (custoDiario * 30));
}
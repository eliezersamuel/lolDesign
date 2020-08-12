
function calculoValor(origem, destino, tempo, plano){
    let valor = 0;
    let tempoExcedente = 0;
    let semPlano = 0;
    let comPlano = 0;

    if((origem === 11) && (destino === 16)) {valor = 1.9;}
    else if((origem === 16) && (destino === 11)) {valor = 2.9;}
    else if((origem === 11) && (destino === 17)) {valor = 1.7;}
    else if((origem === 17) && (destino === 11)) {valor = 2.7;}
    else if((origem === 11) && (destino === 18)) {valor = 0.9;}
    else if((origem === 18) && (destino === 11)) {valor = 1.9;}

    tempoExcedente = tempo - plano;

    comPlano = (tempoExcedente*valor*1.1).toFixed(2);
    semPlano = (tempo*valor).toFixed(2);


    return ({
            comPlano,
            semPlano
            });
}

export default calculoValor;
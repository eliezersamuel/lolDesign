import React from 'react';
import './style.css';

export default function Telzir(){
    return(
        <div className="container">
            <div className="inputContainer">
                <div className="falemaisContainer">
                    <div className="tipoPlano">
                        <h3>FaleMais 30</h3>
                        <p>Fale de graça por até 30 minutos*</p>
                    </div>
                    <div className="tipoPlano">
                         <h3>FaleMais 60</h3>
                         <p>Fale de graça por até 60 minutos*</p>
                    </div>
                    <div className="tipoPlano">
                         <h3>FaleMais 120</h3>
                         <p>Fale de graça por até 120 minutos*</p>
                    </div>
                </div>
                <div className="falemaisChecked on">
                    <div className="inputOrigem">
                        <h3>Origem</h3>
                    </div>
                    <div className="inputDestino">
                        <h3>Destino</h3>
                    </div>
                    <div className="inputTempo">
                        <h3>Tempo</h3>
                    </div>
                    <div className="botaoSubmit">
                        <button>Calcular</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
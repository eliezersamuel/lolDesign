import React from 'react';

import './styles.css';

function Result(props) {
    return(
        <div className="resultado-container">
            <h1>Resultado</h1>
            
            <p className="resultado-com-plano">
                Preço com o Plano:
                <span>R$ {props.preço.comPlano}</span>
            </p>

            <p className="resultado-sem-plano">
                Preço sem o Plano:
                <span>R$ {props.preço.semPlano}</span>
            </p>
        </div>
    );
}

export default Result;
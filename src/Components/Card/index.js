import React from 'react';

import './styles.css';

function Card(props){
    return(
        <div className="falemaisContainer">
            <div className="tipoPlano">
                <h3>{props.plano}</h3>
                <h2>
                    {`R$ ${props.plano.replace('FaleMais', '')},`}
                </h2>
                <h4>00<br/>/mês</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;
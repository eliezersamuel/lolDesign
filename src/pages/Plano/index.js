import React, {useRef, useState} from 'react';
import {useParams} from 'react-router-dom';

import BackHeader from '../../Components/BackHeader';
import InputFormDial from '../../Components/InputFormDial';
import InputFormMin from '../../Components/InputFormMin';
import Result from '../../Components/Result';

import calculoValor from '../../helpers/calculoValor';
import handleTime from '../../helpers/handleTime';

import './styles.css';

function Plano(){
    const [resultadoPreço, setresultadoPreço] = useState(0);
    
    const { plano } = useParams();
    const inputFormDialRef = useRef(null);
    const inputFormMinRef = useRef(null);

    async function funSubmit(){
        const origem = inputFormDialRef.current.origem;
        const destino = inputFormDialRef.current.destino;
        const tempo = inputFormMinRef.current.minutos;

        const minutos = await handleTime(tempo);
        const preço = await calculoValor((+origem), (+destino), minutos, (+plano));

        setresultadoPreço(prev => preço);
    }

    return(
        <div className="planoContainer">
            <BackHeader/>
            <InputFormDial ref={inputFormDialRef}/>
            <InputFormMin ref={inputFormMinRef}/>
            <div className="botaoSubmit">
                <button
                    type='submit'
                    onClick={ () => funSubmit()}
                >
                    Calcular
                </button>
            </div>

            <div className="resultado-container">
                <Result preço={resultadoPreço}/>
            </div>

        </div>
    );
}

export default Plano;
import React from 'react';
import {useParams} from 'react-router-dom';

import BackHeader from '../../Components/BackHeader';
import InputFormDial from '../../Components/InputFormDial';
import InputFormMin from '../../Components/InputFormMin';

import './styles.css';

function Plano(){
    const { plano } = useParams();

    return(
        <div className="planoContainer">
            <BackHeader/>
            <InputFormDial/>
            <InputFormMin/>
            <div className="botaoSubmit">
                <button type='submit'>
                    Calcular
                </button>
            </div>
        </div>
    );
}

export default Plano;
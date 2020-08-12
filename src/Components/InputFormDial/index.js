import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';

import './styles.css';

const InputFormDial = forwardRef( (props, ref) => {
    
    const [origem, setOrigem] = useState(0);
    const [destino, setDestino] = useState(0);

    const ori = useRef(null);
    const dest = useRef(null);

    const options = [
        { value: 11, label: '011'},
        { value: 16, label: '016'},
        { value: 17, label: '017'},
        { value: 18, label: '018'}
    ]


    useImperativeHandle(
        ref,
        () => {
            return {
                origem: ori.current.value,
                destino: dest.current.value,
            }
        },
        [origem, destino]
    );

    return(
        <div className="input-form-dial">

            <div className="origem">
                <label htmlFor="origem">Origem: </label>
                <select
                    defaultValue=''
                    name="origem"
                    className='select-input'
                    ref={ori}
                    onChange={(event) => setOrigem(event.target.value)}
                >
                    <option value='' disabled hidden>Selecione a Origem</option>
                    {options.map( (option) => {
                        return (<option key={option.value} value={option.value}>{option.label}</option>);
                    })}
                </select>
            </div>
            
            <div className="destino">
                <label htmlFor="destino">Destino: </label>
                <select
                    defaultValue=''
                    name="destino"
                    className='select-input'
                    ref={dest}
                    onChange={(event) => setDestino(event.target.value)}
                >
                    <option value='' disabled hidden>Selecione a Destino</option>
                    {options.map( (option) => {
                        return (<option key={option.value} value={option.value}>{option.label}</option>);
                    })}
                </select>
            </div>

        </div>
    );
});

export default InputFormDial;
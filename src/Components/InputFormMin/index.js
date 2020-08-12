import React, {useState} from 'react';

import './styles.css';

function InputFormMin(){
    const [minutos, setMinutos] = useState(0);

    function handleTime(argTempo){
        const tempo = argTempo.split(':');
        
        const min = (+tempo[0])*3600 + (+tempo[1])*60 + (+tempo[2]);
        setMinutos(min);
        
    }

    return(
        <div className="input-form-min-container">
            <div className="input-form">
                <input
                    required
                    step={1}
                    className='input-minutos'
                    type="time"
                    id='minutos'
                    onChange={(e) => handleTime(e.target.value)}
                />
                <label htmlFor="minutos">Tempo: </label>
            </div>
        </div>
    );
}

export default InputFormMin;
import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';

import './styles.css';

const InputFormMin = forwardRef( (props, ref) => {

    const [minutos, setMinutos] = useState(0);

    const min = useRef(0);

    useImperativeHandle(
        ref,
        () => {
            return {
                minutos: min.current.value,
            }
        },
        [minutos]
    );

    return(
        <div className="input-form-min-container">
            <div className="input-form">
                <input
                    required
                    step={1}
                    className='input-minutos'
                    type="time"
                    id='minutos'
                    ref={min}
                    onChange={(e) => setMinutos(e.target.value)}
                />
                <label htmlFor="minutos">Tempo: </label>
            </div>
        </div>
    );
});

export default InputFormMin;
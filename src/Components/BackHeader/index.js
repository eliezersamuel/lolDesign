import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

function BackHeader(){
    return(
        <header className="page-header">

            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
            </div>

        </header>
    );
}

export default BackHeader;
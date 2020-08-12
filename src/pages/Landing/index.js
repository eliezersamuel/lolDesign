import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../Components/Card';

import './styles.css';

function Landing(){

    return(
        <div className="cardContainer">
                <Link to='/plano/30'>
                    <Card 
                        plano='FaleMais 30' 
                        description='Fale de graça por até 30 minutos*'
                    />
                </Link>
            
                <Link to='/plano/60'>
                    <Card 
                        plano='FaleMais 60' 
                        description='Fale de graça por até 60 minutos*'
                    />
                </Link>
            
                <Link to='/plano/120'>
                    <Card 
                        plano='FaleMais 120' 
                        description='Fale de graça por até 120 minutos*'
                    />
                </Link>
        </div>
    );
}

export default Landing;
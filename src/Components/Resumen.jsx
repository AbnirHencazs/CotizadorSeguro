import React from 'react';
import {MuestraPrimerLetraMayus} from '../helper'
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {

    const { marca, año, plan } = datos;
    if(marca === '' || año === '' || plan === '') return null;

    return(
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {MuestraPrimerLetraMayus(marca)}</li>
                <li>Plan: {MuestraPrimerLetraMayus(plan)}</li>
                <li>Año del auto: {MuestraPrimerLetraMayus(año)}</li>
            </ul>
        </ContenedorResumen>
    );
}

export default Resumen;
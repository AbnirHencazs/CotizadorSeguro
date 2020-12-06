import React from 'react';
import styled from '@emotion/styled';
import { TrasitionGroup, CSSTransition, TransitionGroup } from 'react-transition-group';

const Parrafo = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ContenedorResultado = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoResultado = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({ resultado }) => {
    return(
        (resultado === 0)
        ? <Parrafo>Elíge marca, año y tipo</Parrafo> 
        :   (
                <ContenedorResultado>
                    <TransitionGroup
                        component="p"
                        className="resultado">
                        <CSSTransition
                            classNames="resultado"
                            key={resultado}
                            timeout={{enter: 500, exit: 500}}>
                            <TextoResultado>El total es: $ {resultado}</TextoResultado>
                        </CSSTransition>
                    </TransitionGroup>
                </ContenedorResultado>
            )
    )
}

export default Resultado;
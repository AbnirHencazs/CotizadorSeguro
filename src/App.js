import React, { useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import styled from '@emotion/styled';

const Contenendor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({});

  return (
    <Contenendor>
      <Header
        titulo="Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}/>
      </ContenedorFormulario>
    </Contenendor>
  );
}

export default App;

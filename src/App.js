import React, { useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen'
import Resultado from './Components/Resultado'
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

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      año: '',
      plan: ''
    }
  });
  //destructuramos el objeto Resumen para obtener los datos
  const { datos, cotizacion } = resumen
  return (
    <Contenendor>
      <Header
        titulo="Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}/>
        <Resumen
          datos={datos}/>
        <Resultado
          resultado={cotizacion}/>
      </ContenedorFormulario>
    </Contenendor>
  );
}

export default App;

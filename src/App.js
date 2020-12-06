import React, { useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen'
import Resultado from './Components/Resultado'
import Spinner from './Components/Spinner';
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
  const [loading, setLoading] = useState(false);
  //destructuramos el objeto Resumen para obtener los datos
  const { datos, cotizacion } = resumen

  return (
    <Contenendor>
      <Header
        titulo="Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setLoading={setLoading}/>

        {
          loading
          ? <Spinner/>
          : null
        }

        <Resumen
          datos={datos}/>
        {
          !loading
          ?<Resultado
            resultado={cotizacion}/>
          : null
        }
        
      </ContenedorFormulario>
    </Contenendor>
  );
}

export default App;

import React, { useState } from 'react';
import { ObtenerDiferenciaAño, CalcularMarca, ObtenerPlan } from '../helper';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    -moz-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`;

const FormError = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({ setResumen }) => {
    const [datos, setDatos] = useState({
        marca: '',
        año: '',
        plan: 'basico'
    })
    const [formError, setFormError] = useState(false);
    //Extraer los valores del state
    const { marca, año, plan } = datos;
    //Leer datos del form y ponerlos en el state
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(marca.trim() === '' || año.trim() === '' || plan === ''){
            setFormError(true);
            return;
        }
        setFormError(false)
        let resultado = 2000;
        //Obtener la diferencia de años
        const diferencia = ObtenerDiferenciaAño(año)
        console.log(diferencia)
        //Por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;
        //Americano 15% Asitaico 5% Europeo 30%
        resultado = CalcularMarca(marca) * resultado;
        //Basico aumenta 20% Completo 50%
        resultado = parseFloat( ObtenerPlan(plan) * resultado).toFixed(2)
        //Total
        setResumen({
            cotizacion: resultado,
            datos
        })
    }
    return(
        <form
            onSubmit={handleSubmit}>
            {
                formError
                ?<FormError>Todos los campos son obligatorios</FormError>
                :null
            }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleChange}>
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="año"
                    value={año}
                    onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label htmlFor="">Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={handleChange}/>Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={handleChange}/>Completo
            </Campo>
            <Boton type="submit"> Cotizar </Boton>
        </form>
    );
}

export default Formulario;
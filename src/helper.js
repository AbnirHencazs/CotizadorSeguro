//Diferencia de años
export function ObtenerDiferenciaAño(año){
    return new Date().getFullYear() - año;
}

//Calcular incremento de marca
export function CalcularMarca(marca){
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;
    }
    return incremento;
}

export function ObtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

export function MuestraPrimerLetraMayus(texto){
    //Se posiciona en el primer caracter lo vuelve mayus, borra la primera letra del texto y lo concatena con el primer carcater en mayus
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}
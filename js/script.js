
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}


function mostrarDetalleCotizacion(detalle, costoTotal) {
    let tableHtml = "<table><tr><th>Item</th><th>Producto</th><th>Cantidad</th><th>Precio Individual</th><th>Precio Total</th></tr>";

    detalle.forEach(item => {
        // Agrega el símbolo "$" a los valores de Precio Individual y Precio Total
        const precioIndividual = `$${item.precioIndividual.toFixed(2)}`;
        const precioTotal = `$${item.precioTotal.toFixed(2)}`;

        tableHtml += `<tr><td>${item.item}</td><td>${item.producto}</td><td>${item.cantidad}</td><td>${precioIndividual}</td><td>${precioTotal}</td></tr>`;
    });

    // Agrega una fila al final para mostrar el costo total
    const costoTotalConSimbolo = `$${costoTotal.toFixed(2)}`;
    tableHtml += `<tr><td colspan="4"><strong>Total:</strong></td><td>${costoTotalConSimbolo}</td></tr>`;

    tableHtml += "</table>";

    const resultadoElement = document.getElementById('resultadoCotizacion');
    resultadoElement.innerHTML = tableHtml;
}



function calcularCotizacion() {
let n = 0;
    //precio carpas sin paredes
    const precioTecho3x4 = 30;
    const precioTecho4x6 = 35;
    const precioTecho6x6 = 40;
    const precioTecho6x8 = 50;
    //precio paredes
    const precioPared3 = 3;
    const precioPared4 = 4;
    const precioPared6 = 6;
    //precio mobiliario
    const precioMobiliario=25;
    //precio mesas
    const precioMesa = 4;
    const precioMesaVestida = 7.5;
    //precio sillas
    const precioSillaSinVestir = 0.4;
    const precioSillaSinVestirclientes = 0.3;
    const precioSillaVestida = 1;
    //precio pista de baile
    const precioPistaTablero = 7;
    //precio sillas y mesas para niños 
    const precioSillaNino = 0.3;
    const precioMesaNino = 2;
    //datos de cliente
    const nombreCliente = document.getElementById('nombre').value;
    const cedulaCliente = document.getElementById('cedula').value;
    const direccionCliente = document.getElementById('direccion').value;
    const numeroCliente = document.getElementById('numero').value;
    const correoCliente = document.getElementById('correo').value;

    //obtiene la cantidad de articulos de el label
    const costoTransporte = parseFloat(document.getElementById('costoTransporte').value) || 0;
    const cantidadCarpas3x4 = parseInt(document.getElementById('carpas3x4').value) || 0;
    const cantidadParedes3 = parseInt(document.getElementById('paredes3').value) || 0;
    const cantidadParedes4 = parseInt(document.getElementById('paredes4').value) || 0;
    const cantidadParedes6 = parseInt(document.getElementById('paredes6').value) || 0;
    const cantidadCarpa4x6 = parseInt(document.getElementById('carpas4x6').value) || 0;
    const cantidadCarpa6x6 = parseInt(document.getElementById('carpas6x6').value) || 0;
    const cantidadCarpa6x8 = parseInt(document.getElementById('carpas6x8').value) || 0;
    const cantidadMesas = parseInt(document.getElementById('mesas').value) || 0;
    const cantidadMesasVestidas = parseInt(document.getElementById('mesasVestidas').value) || 0;
    const cantidadSillasSinVestir = parseInt(document.getElementById('sillasSinVestir').value) || 0;
    const cantidadSillasVestidas = parseInt(document.getElementById('sillasVestidas').value) || 0;
    const cantidadPistaTableros = parseInt(document.getElementById('pistaTableros').value) || 0;
    const cantidadSillasNinos = parseInt(document.getElementById('sillasNinos').value) || 0;
    const cantidadMesasNinos = parseInt(document.getElementById('mesasNinos').value) || 0;
    const cantidadMobiliario = parseInt(document.getElementById('mobiliario').value) || 0;
    const cantidadSillasSinVestirclientes = parseInt(document.getElementById('sillasSinVestirclientes').value) || 0;
    //costo total de carpas
    const costoCarpas3x4 = precioTecho3x4 * cantidadCarpas3x4;
    const costoCarpas4x6 = precioTecho4x6 * cantidadCarpa4x6;
    const costoCarpas6x6 = precioTecho6x6 * cantidadCarpa6x6;
    const costoCarpas6x8 = precioTecho6x8 * cantidadCarpa6x8;
    //costo total de paredes
    const costoParedes3 = precioPared3 * cantidadParedes3;
    const costoParedes4 = precioPared4 * cantidadParedes4;
    const costoParedes6 = precioPared6 * cantidadParedes6;
    //costo total de mobiliario
    const costoMobiliario= precioMobiliario*cantidadMobiliario;
    //costo toal de mesas, sillas  pista de baile
    const costoMesas = precioMesa * cantidadMesas;
    const costoMesasVestidas = precioMesaVestida * cantidadMesasVestidas;
    const costoSillasSinVestir = precioSillaSinVestir * cantidadSillasSinVestir;
    const costoSillasSinVestirclientes = precioSillaSinVestirclientes * cantidadSillasSinVestirclientes;
    const costoSillasVestidas = precioSillaVestida * cantidadSillasVestidas;
    const costoPistaTableros = precioPistaTablero * cantidadPistaTableros;
    const costoSillasNinos = precioSillaNino * cantidadSillasNinos;
    const costoMesasNinos = precioMesaNino * cantidadMesasNinos;

    document.getElementById('nombreClienteTd').textContent = nombreCliente;
    document.getElementById('cedulaClienteTd').textContent = cedulaCliente;
    document.getElementById('direccionClienteTd').textContent = direccionCliente;
    document.getElementById('numeroClienteTd').textContent = numeroCliente;
    document.getElementById('correoClienteTd').textContent = correoCliente;



    //costo total de todo
    const costoTotal = costoCarpas3x4 + costoCarpas4x6 + costoCarpas6x6 + costoCarpas6x8 +
                       costoParedes4 + costoParedes6 + costoMesas + costoMesasVestidas +
                       costoSillasSinVestir + costoSillasVestidas + costoPistaTableros +
                       costoSillasNinos + costoMesasNinos + costoTransporte + costoMobiliario + costoSillasSinVestirclientes+
                       costoParedes3;
                       





    
    // al boton cotizador hace la funcion de pasar por parametro el costo tal a la 
const resultadoElement = document.getElementById('resultadoCotizacion');
    resultadoElement.innerHTML = `<p>El costo total de la cotización es: $${costoTotal}</p>`;

const detalleCotizacion = [];

//agrega los elementos a la tabla para er los detalles 
 if (cantidadCarpas3x4 > 0) {
        n += 1;
        const precioIndividual = precioTecho3x4;
        const precioTotal = precioIndividual * cantidadCarpas3x4;
        const item = n.toString();

        detalleCotizacion.push({
            item: item,
            producto: "Carpas 3x4",
            cantidad: cantidadCarpas3x4,
            precioIndividual: precioIndividual,
            precioTotal: precioTotal
        });
    }
if (cantidadCarpa4x6 > 0) {
    n += 1;
    const precioIndividual4x6 = precioTecho4x6;
    const precioTotal4x6 = precioIndividual4x6 * cantidadCarpa4x6;
    const item = n.toString();
    
    detalleCotizacion.push({
        item: item,
        producto: "Carpas 4x6",
        cantidad: cantidadCarpa4x6,
        precioIndividual: precioIndividual4x6,
        precioTotal: precioTotal4x6
    });
}

if (cantidadCarpa6x6 > 0) {
    n += 1;
    const precioIndividual6x6 = precioTecho6x6;
    const precioTotal6x6 = precioIndividual6x6 * cantidadCarpa6x6;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Carpas 6x6",
        cantidad: cantidadCarpa6x6,
        precioIndividual: precioIndividual6x6,
        precioTotal: precioTotal6x6
    });
}

if (cantidadCarpa6x8 > 0) {
    n += 1;
    const precioIndividual6x8 = precioTecho6x8;
    const precioTotal6x8 = precioIndividual6x8 * cantidadCarpa6x8;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Carpas 6x8",
        cantidad: cantidadCarpa6x8,
        precioIndividual: precioIndividual6x8,
        precioTotal: precioTotal6x8
    });
}


 
if (cantidadMesas > 0) {
    n += 1;
    const precioIndividualMesa = precioMesa;
    const precioTotalMesa = precioIndividualMesa * cantidadMesas;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Mesas",
        cantidad: cantidadMesas,
        precioIndividual: precioIndividualMesa,
        precioTotal: precioTotalMesa
    });
}

if (cantidadMesasVestidas > 0) {
    n += 1;
    const precioIndividualMesaVestida = precioMesaVestida;
    const precioTotalMesaVestida = precioIndividualMesaVestida * cantidadMesasVestidas;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Mesas Vestidas",
        cantidad: cantidadMesasVestidas,
        precioIndividual: precioIndividualMesaVestida,
        precioTotal: precioTotalMesaVestida
    });
}

if (cantidadSillasSinVestir > 0) {
    n += 1;
    const precioIndividualSillaSinVestir = precioSillaSinVestir;
    const precioTotalSillaSinVestir = precioIndividualSillaSinVestir * cantidadSillasSinVestir;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Sillas Sin Vestir",
        cantidad: cantidadSillasSinVestir,
        precioIndividual: precioIndividualSillaSinVestir,
        precioTotal: precioTotalSillaSinVestir
    });
}

if (cantidadSillasSinVestirclientes > 0) {
    n += 1;
    const precioIndividualSillaSinVestirclientes = precioSillaSinVestirclientes;
    const precioTotalSillaSinVestirclientes = precioIndividualSillaSinVestirclientes * cantidadSillasSinVestirclientes;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Sillas Sin Vestir",
        cantidad: cantidadSillasSinVestirclientes,
        precioIndividual: precioIndividualSillaSinVestirclientes,
        precioTotal: precioTotalSillaSinVestirclientes
    });
}


if (cantidadSillasVestidas > 0) {
    n += 1;
    const precioIndividualSillaVestida = precioSillaVestida;
    const precioTotalSillaVestida = precioIndividualSillaVestida * cantidadSillasVestidas;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Sillas Vestidas",
        cantidad: cantidadSillasVestidas,
        precioIndividual: precioIndividualSillaVestida,
        precioTotal: precioTotalSillaVestida
    });
}

if (cantidadPistaTableros > 0) {
    n += 1;
    const precioIndividual = precioPistaTablero;
    const precioTotal = precioIndividual * cantidadPistaTableros;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Pista de baile (Tableros)",
        cantidad: cantidadPistaTableros,
        precioIndividual: precioIndividual,
        precioTotal: precioTotal
    });
}

if (cantidadSillasNinos > 0) {
    n += 1;
    const precioIndividualSillaNino = precioSillaNino;
    const precioTotalSillaNino = precioIndividualSillaNino * cantidadSillasNinos;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Sillas de Niños",
        cantidad: cantidadSillasNinos,
        precioIndividual: precioIndividualSillaNino,
        precioTotal: precioTotalSillaNino
    });
}

if (cantidadMesasNinos > 0) {
    n += 1;
    const precioIndividualMesaNino = precioMesaNino;
    const precioTotalMesaNino = precioIndividualMesaNino * cantidadMesasNinos;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Mesas de Niños",
        cantidad: cantidadMesasNinos,
        precioIndividual: precioIndividualMesaNino,
        precioTotal: precioTotalMesaNino
    });
}

if (cantidadMobiliario > 0) {
    n += 1;
    const precioIndividualMobiliario = precioMobiliario;
    const precioTotalMobiliario = precioIndividualMobiliario * cantidadMobiliario;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Mobiliario de arco para globos y mesitas",
        cantidad: cantidadMobiliario,
        precioIndividual: precioIndividualMobiliario,
        precioTotal: precioTotalMobiliario
    });
}


if (costoTransporte > 0) {
    n += 1;
    const item = n.toString();

    detalleCotizacion.push({
        item: item,
        producto: "Costo de transporte",
        cantidad: 1,  // Puedes considerar el transporte como un único servicio
        precioIndividual: costoTransporte,
        precioTotal: costoTransporte
    });
}

if (cantidadParedes3 > 0) {
    n += 1;
    const item = n.toString();
    const precioIndividualPared3 = precioPared3;
    const precioTotalPared3 = precioIndividualPared3 * cantidadParedes3;

    detalleCotizacion.push({
        item: item,
        producto: "Paredes de 3 metros",
        cantidad: cantidadParedes3,
        precioIndividual: precioIndividualPared3,
        precioTotal: precioTotalPared3
    });
}

if (cantidadParedes4 > 0) {
    n += 1;
    const item = n.toString();
    const precioIndividualPared4 = precioPared4;
    const precioTotalPared4 = precioIndividualPared4 * cantidadParedes4;

    detalleCotizacion.push({
        item: item,
        producto: "Paredes de 4 metros",
        cantidad: cantidadParedes4,
        precioIndividual: precioIndividualPared4,
        precioTotal: precioTotalPared4
    });
}

if (cantidadParedes6 > 0) {
    n += 1;
    const item = n.toString();
    const precioIndividualPared6 = precioPared6;
    const precioTotalPared6 = precioIndividualPared6 * cantidadParedes6;

    detalleCotizacion.push({
        item: item,
        producto: "Paredes de 6 metros",
        cantidad: cantidadParedes6,
        precioIndividual: precioIndividualPared6,
        precioTotal: precioTotalPared6
    });
}

    //enseña el detalle de la cotizacion
   mostrarDetalleCotizacion(detalleCotizacion, costoTotal);
    

}
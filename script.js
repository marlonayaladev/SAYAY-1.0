//paises

document.addEventListener("DOMContentLoaded", function () {
    const selectPais = document.getElementById("paisSeleccionado");

    // Cargar el país guardado en localStorage si existe
    const paisGuardado = localStorage.getItem("paisSeleccionado");
    if (paisGuardado) {
        selectPais.value = paisGuardado;
    }

    // Guardar el país seleccionado en localStorage
    selectPais.addEventListener("change", function () {
        localStorage.setItem("paisSeleccionado", selectPais.value);
    });
});

//B o t o n e s

document.addEventListener("DOMContentLoaded", function () {
    const selectPais = document.getElementById("paisSeleccionado");
    const planeamientoDiv = document.getElementById("planeamiento");
    const botonesPlaneamiento = document.querySelectorAll(".btn-planeamiento");

    // Mostrar la sección de planeamiento cuando se seleccione un país
    selectPais.addEventListener("change", function () {
        if (selectPais.value) {
            planeamientoDiv.style.display = "block";
        }
    });

    // Agregar interacción a los botones de planeamiento
    botonesPlaneamiento.forEach(boton => {
        // Cambio de color al pasar el mouse
        boton.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#4CAF50";
            this.style.color = "white";
        });

        boton.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
            this.style.color = "black";
        });

        // Al hacer clic, redirigir o ejecutar la acción correspondiente
        boton.addEventListener("click", function () {
            const nivel = this.dataset.value;
            console.log(`Seleccionaste: ${nivel}`); // Aquí irá la función que manejará la selección
            ejecutarNivelDePlaneamiento(nivel);
        });
    });
});

// Función para manejar la selección del nivel de planeamiento
function ejecutarNivelDePlaneamiento(nivel) {
    alert(`Ir a la opción: ${nivel}`); // Aquí después se agregará la lógica para cada nivel
}

// T A B L A  D E  E S T R A  T E G I C O

document.addEventListener("DOMContentLoaded", function () {
    const botonesPlaneamiento = document.querySelectorAll(".btn-planeamiento");
    const planeamientoDiv = document.getElementById("planeamiento");
    const estrategicoSection = document.getElementById("estrategicoSection");
    const operacionalSection = document.getElementById("operacionalSection");
    const fuerzaAereaSection = document.getElementById("fuerzaAereaSection");
    const volverBtnEstrategico = document.getElementById("volverPlaneamiento");
    const volverBtnOperacional = document.getElementById("volverPlaneamientoOperacional");
    const volverBtnFuerzaAerea = document.getElementById("volverOperacional");
    const inicioDiv = document.getElementById("inicio");
    const fuerzaNavalSection = document.getElementById("fuerzaNavalSection");
    const volverBtnFuerzaNaval = document.getElementById("volverOperacionalNaval");

    // Manejar clics en los botones de planeamiento
    botonesPlaneamiento.forEach(boton => {
        boton.addEventListener("click", function () {
            const nivel = this.dataset.value;

            if (nivel === "estrategico") {
                // Ocultar la selección de país y la sección de planeamiento
                inicioDiv.style.display = "none";
                planeamientoDiv.style.display = "none";

                // Mostrar la sección Estratégico
                estrategicoSection.style.display = "block";
            } else if (nivel === "operacional") {
                // Ocultar la selección de país y la sección de planeamiento
                inicioDiv.style.display = "none";
                planeamientoDiv.style.display = "none";

                // Mostrar la sección Operacional
                operacionalSection.style.display = "block";
            }
        });
    });

    // Botón para volver a la selección de planeamiento desde Estratégico
    volverBtnEstrategico.addEventListener("click", function () {
        estrategicoSection.style.display = "none";
        planeamientoDiv.style.display = "block";
        inicioDiv.style.display = "block";
    });

    // Botón para volver a la selección de planeamiento desde Operacional
    volverBtnOperacional.addEventListener("click", function () {
        operacionalSection.style.display = "none";
        planeamientoDiv.style.display = "block";
        inicioDiv.style.display = "block";
    });

    // Botón para volver a la selección de operacional desde Fuerza Aérea
    volverBtnFuerzaAerea.addEventListener("click", function () {
        fuerzaAereaSection.style.display = "none";
        operacionalSection.style.display = "block";
    });

    // Botón para volver a la selección de operacional desde Fuerza Naval
    volverBtnFuerzaNaval.addEventListener("click", function () {
        fuerzaNavalSection.style.display = "none";
        operacionalSection.style.display = "block";
    });

    // Manejar clics en los botones de operacional
    const botonesOperacional = document.querySelectorAll(".btn-operacional");
    botonesOperacional.forEach(boton => {
        boton.addEventListener("click", function () {
            const opcion = this.dataset.value;
            if (opcion === "fuerzaAerea") {
                operacionalSection.style.display = "none";
                fuerzaAereaSection.style.display = "block";
            } else if (opcion === "fuerzaNaval") {
                operacionalSection.style.display = "none";
                fuerzaNavalSection.style.display = "block";
            } else {
                alert(`Seleccionaste: ${opcion}`); // Aquí irá la función que manejará la selección
            }
        });
    });

    // Calcular totales para Fuerza Aérea
    function calcularTotales() {
        let sumaTotalPeru = 0;
        let sumaTotalVerde = 0;

        document.querySelectorAll("#fuerzaAereaSection tbody tr").forEach(fila => {
            const factor = parseFloat(fila.querySelector("td:first-child").textContent);
            const inputPeru = fila.querySelector(".input-peru");
            const inputVerde = fila.querySelector(".input-verde");
            const totalPeru = fila.querySelector(".total-peru");
            const totalVerde = fila.querySelector(".total-verde");

            if (inputPeru && inputVerde && totalPeru && totalVerde) {
                const valorPeru = parseFloat(inputPeru.value) || 0;
                const valorVerde = parseFloat(inputVerde.value) || 0;

                const resultadoPeru = (valorPeru * factor).toFixed(2);
                const resultadoVerde = (valorVerde * factor).toFixed(2);

                totalPeru.textContent = resultadoPeru;
                totalVerde.textContent = resultadoVerde;

                sumaTotalPeru += parseFloat(resultadoPeru);
                sumaTotalVerde += parseFloat(resultadoVerde);
            }
        });

        document.getElementById("sumaTotalPeru").textContent = sumaTotalPeru.toFixed(2);
        document.getElementById("sumaTotalVerde").textContent = sumaTotalVerde.toFixed(2);
    }

    function calcularTotales2() {
        let sumaTotalPeru = 0;
        let sumaTotalVerde = 0;

        document.querySelectorAll("#fuerzaAereaSection2 tbody tr").forEach(fila => {
            const factor = parseFloat(fila.querySelector("td:nth-child(2)").textContent);
            const inputPeru = fila.querySelector(".input-peru");
            const inputVerde = fila.querySelector(".input-verde");
            const totalPeru = fila.querySelector(".total-peru");
            const totalVerde = fila.querySelector(".total-verde");

            if (inputPeru && inputVerde && totalPeru && totalVerde) {
                const valorPeru = parseFloat(inputPeru.value) || 0;
                const valorVerde = parseFloat(inputVerde.value) || 0;

                const resultadoPeru = (valorPeru * factor).toFixed(2);
                const resultadoVerde = (valorVerde * factor).toFixed(2);

                totalPeru.textContent = resultadoPeru;
                totalVerde.textContent = resultadoVerde;

                sumaTotalPeru += valorPeru;
                sumaTotalVerde += valorVerde;
            }
        });

        document.getElementById("sumaTotalPeru2").textContent = sumaTotalPeru.toFixed(2);
        document.getElementById("sumaTotalVerde2").textContent = sumaTotalVerde.toFixed(2);
    }

    function calcularTotales3() {
        let sumaTotalPeru = 0;
        let sumaTotalVerde = 0;

        document.querySelectorAll("#fuerzaAereaSection2 tbody tr").forEach(fila => {
            const factor = parseFloat(fila.querySelector("td:nth-child(2)").textContent);
            const inputPeru = fila.querySelector(".input-peru");
            const inputVerde = fila.querySelector(".input-verde");
            const totalPeru = fila.querySelector(".total-peru");
            const totalVerde = fila.querySelector(".total-verde");

            if (inputPeru && inputVerde && totalPeru && totalVerde) {
                const valorPeru = parseFloat(inputPeru.value) || 0;
                const valorVerde = parseFloat(inputVerde.value) || 0;

                const resultadoPeru = (valorPeru * factor).toFixed(2);
                const resultadoVerde = (valorVerde * factor).toFixed(2);

                totalPeru.textContent = resultadoPeru;
                totalVerde.textContent = resultadoVerde;

                sumaTotalPeru += valorPeru;
                sumaTotalVerde += valorVerde;
            }
        });

        document.getElementById("sumaTotalPeru3").textContent = sumaTotalPeru.toFixed(2);
        document.getElementById("sumaTotalVerde3").textContent = sumaTotalVerde.toFixed(2);
    }

    // Calcular totales para Fuerza Naval
    function calcularTotalesNaval() {
        let sumaTotalPeru = 0;
        let sumaTotalVerde = 0;

        document.querySelectorAll("#fuerzaNavalSection tbody tr").forEach(fila => {
            const factor = parseFloat(fila.querySelector("td:first-child").textContent);
            const inputPeru = fila.querySelector(".input-peru");
            const inputVerde = fila.querySelector(".input-verde");
            const totalPeru = fila.querySelector(".total-peru");
            const totalVerde = fila.querySelector(".total-verde");

            if (inputPeru && inputVerde && totalPeru && totalVerde) {
                const valorPeru = parseFloat(inputPeru.value) || 0;
                const valorVerde = parseFloat(inputVerde.value) || 0;

                const resultadoPeru = (valorPeru * factor).toFixed(2);
                const resultadoVerde = (valorVerde * factor).toFixed(2);

                totalPeru.textContent = resultadoPeru;
                totalVerde.textContent = resultadoVerde;

                sumaTotalPeru += parseFloat(resultadoPeru);
                sumaTotalVerde += parseFloat(resultadoVerde);
            }
        });

        document.getElementById("sumaTotalPeruNaval").textContent = sumaTotalPeru.toFixed(2);
        document.getElementById("sumaTotalVerdeNaval").textContent = sumaTotalVerde.toFixed(2);
    }

    // Añadir eventos a los inputs para recalcular los totales
    document.querySelectorAll("#fuerzaAereaSection .input-peru, #fuerzaAereaSection .input-verde").forEach(input => {
        input.addEventListener("input", calcularTotales);
    });

    document.querySelectorAll("#fuerzaAereaSection2 .input-peru, #fuerzaAereaSection2 .input-verde").forEach(input => {
        input.addEventListener("input", calcularTotales2);
    });

    document.querySelectorAll("#fuerzaAereaSection2 .input-peru, #fuerzaAereaSection2 .input-verde").forEach(input => {
        input.addEventListener("input", calcularTotales3);
    });

    document.querySelectorAll("#fuerzaNavalSection .input-peru, #fuerzaNavalSection .input-verde").forEach(input => {
        input.addEventListener("input", calcularTotalesNaval);
    });

    // Navegar entre tablas
    document.getElementById("siguienteTablaFuerzaAerea").addEventListener("click", function () {
        document.getElementById("fuerzaAereaSection").style.display = "none";
        document.getElementById("fuerzaAereaSection2").style.display = "block";
    });

    document.getElementById("volverFuerzaAerea").addEventListener("click", function () {
        document.getElementById("fuerzaAereaSection2").style.display = "none";
        document.getElementById("fuerzaAereaSection").style.display = "block";
    });

    // Añadir eventos a los inputs para recalcular los totales
    document.querySelectorAll("#fuerzaAereaSection .input-peru, #fuerzaAereaSection .input-verde").forEach(input => {
        input.addEventListener("input", calcularTotales);
    });
});

//EFECTO AL PASAR EL MOUSE SOBRE LAS OPCIONES 

document.addEventListener("DOMContentLoaded", function () {
    const filasTabla = document.querySelectorAll(".tabla-opciones tbody tr");

    // Resaltar al pasar el mouse
    filasTabla.forEach(fila => {
        fila.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#4CAF50";
            this.style.color = "white";
            this.style.cursor = "pointer";

            // Si la categoría es "Liderazgo Nacional", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "liderazgo") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficiente").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficiente").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }

            // Si la categoría es "Sociedad", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "sociedad") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderSociedadCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficienteSociedad").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderSociedadCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficienteSociedad").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }

            // Si la categoría es "Control Interno", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "control") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderControlInternoCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficienteControlInterno").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderControlInternoCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficienteControlInterno").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }

            // Si la categoría es "Coeficiente Multiplicador", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "coeficiente") {
                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficiente").textContent}`;
            }

            // Si la categoría es "Económica", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "economica") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderEconomicaCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficienteEconomica").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderEconomicaCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficienteEconomica").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }

            // Si la categoría es "Política", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "politica") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderPoliticaCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficientePolitica").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderPoliticaCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficientePolitica").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }

            // Si la categoría es "Infraestructura", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "infraestructura") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderInfraestructuraCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficienteInfraestructura").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderInfraestructuraCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficienteInfraestructura").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }

            // Si la categoría es "Terrorismo", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "terrorismo") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderTerrorismoCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficienteTerrorismo").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderTerrorismoCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficienteTerrorismo").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }
        });

        fila.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
            this.style.color = "black";
        });

        // Manejar clic en la categoría
        fila.addEventListener("click", function () {
            const categoria = this.dataset.value;
            console.log(`Seleccionaste: ${categoria}`);
            ejecutarCategoria(categoria);
        });
    });
});

// Función para manejar la selección de una categoría
function ejecutarCategoria(categoria) {
    if (categoria === "liderazgo") {
        abrirModalLiderazgo();
    } else if (categoria === "sociedad") {
        abrirModalSociedad();
    } else if (categoria === "control") {
        abrirModalControlInterno();
    } else if (categoria === "economica") {
        abrirModalEconomica();
    } else if (categoria === "politica") {
        abrirModalPolitica();
    } else if (categoria === "infraestructura") {
        abrirModalInfraestructura();
    } else if (categoria === "terrorismo") {
        abrirModalTerrorismo();
    } else {
        alert(`Abrir opciones de: ${categoria}`); // Aquí luego se agregará la lógica real
    }
}

// Función para abrir el modal de Sociedad
function abrirModalSociedad() {
    const modal = document.getElementById("modalSociedad");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    let coeficienteGINI = localStorage.getItem("coeficienteGINI") || 0;
    document.getElementById("coeficienteGINI").value = coeficienteGINI;

    let indiceDesarrolloHumano = localStorage.getItem("indiceDesarrolloHumano") || 0;
    document.getElementById("indiceDesarrolloHumano").value = indiceDesarrolloHumano;

    calcularPorcentajeSociedad();
}

function cerrarModalSociedad() {
    const modal = document.getElementById("modalSociedad");
    modal.style.display = "none";
}

function mostrarNivelPoderSociedad() {
    document.getElementById("nivelPoderSociedadSection").style.display = "block";
    document.getElementById("coeficienteMultiplicadorSociedadSection").style.display = "none";
}

function mostrarCoeficienteMultiplicadorSociedad() {
    document.getElementById("nivelPoderSociedadSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorSociedadSection").style.display = "block";
}

// Asumimos que el cálculo del "Nivel de Poder" ya se realiza dentro de la función calcularPorcentajeSociedad()
let nivelPoderSociedadCalculado = 0; // Variable para almacenar el resultado calculado

function calcularPorcentajeSociedad() {
    let coeficienteGINI = parseFloat(document.getElementById("coeficienteGINI").value);
    let indiceDesarrolloHumano = parseFloat(document.getElementById("indiceDesarrolloHumano").value);
    let necesidadesBasicas = parseFloat(document.getElementById("necesidadesBasicas").value);
    let fundamentosBienestar = parseFloat(document.getElementById("fundamentosBienestar").value);
    let oportunidades = parseFloat(document.getElementById("oportunidades").value);

    // Calcular el promedio de los seis valores numéricos
    let promedio = ((coeficienteGINI + indiceDesarrolloHumano + necesidadesBasicas + fundamentosBienestar + oportunidades) / 5).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("resultadoSociedad").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    nivelPoderSociedadCalculado = parseFloat(promedio);  // Guardamos el nivel de poder calculado
}

function calcularCoeficienteSociedad() {
    let historicoSociedad = parseFloat(document.getElementById("historicoSociedad").value);
    let historicoPoderSociedad = parseFloat(document.getElementById("historicoPoderSociedad").value);
    let doctrinaConflicto = parseFloat(document.getElementById("doctrinaConflicto").value);

    // Calcular el promedio de los tres valores
    let promedio = ((historicoSociedad + historicoPoderSociedad + doctrinaConflicto) / 3).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("resultadoCoeficienteSociedad").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historicoSociedad", historicoSociedad);
    localStorage.setItem("historicoPoderSociedad", historicoPoderSociedad);
    localStorage.setItem("doctrinaConflicto", doctrinaConflicto);
}

function guardarValoresSociedad() {
    let coeficienteGINI = document.getElementById("coeficienteGINI").value;
    let indiceDesarrolloHumano = document.getElementById("indiceDesarrolloHumano").value;

    localStorage.setItem("coeficienteGINI", coeficienteGINI);
    localStorage.setItem("indiceDesarrolloHumano", indiceDesarrolloHumano);

    alert('Valores guardados correctamente');
}

//VENTANA EMERGENTE

document.addEventListener("DOMContentLoaded", function () {
    const filasTabla = document.querySelectorAll(".tabla-opciones tbody tr");

    filasTabla.forEach(fila => {
        fila.addEventListener("click", function () {
            const categoria = this.dataset.value;

            if (categoria === "liderazgo") {
                abrirModalLiderazgo();
            }
        });
    });
});

function abrirModalLiderazgo() {
    const modal = document.getElementById("modalLiderazgo");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    let valorNacional = localStorage.getItem("nivelAprobacion") || 0;
    let porcentajeNacional = localStorage.getItem("porcentajeAprobacion") || "0%";
    document.getElementById("nivelAprobacion").value = valorNacional;
    document.getElementById("porcentajeAprobacion").textContent = porcentajeNacional;

    let valorInternacional = localStorage.getItem("nivelAprobacionInternacional") || 0;
    let porcentajeInternacional = localStorage.getItem("porcentajeAprobacionInternacional") || "0%";
    document.getElementById("nivelAprobacionInternacional").value = valorInternacional;
    document.getElementById("porcentajeAprobacionInternacional").textContent = porcentajeInternacional;

    let relacionFFAA = localStorage.getItem("relacionFFAA") || "100";
    document.getElementById("relacionFFAA").value = relacionFFAA;
    calcularPorcentaje();
}

function cerrarModalLiderazgo() {
    const modal = document.getElementById("modalLiderazgo");
    modal.style.display = "none";
}

function mostrarNivelPoder() {
    document.getElementById("nivelPoderSection").style.display = "block";
}

// Asumimos que el cálculo del "Nivel de Poder" ya se realiza dentro de la función calcularPorcentaje()
let nivelPoderCalculado = 0; // Variable para almacenar el resultado calculado

function calcularPorcentaje() {
    let valorNacional = parseFloat(document.getElementById("nivelAprobacion").value);
    let porcentajeNacional = valorNacional;

    let valorInternacional = parseFloat(document.getElementById("nivelAprobacionInternacional").value);
    let porcentajeInternacional = valorInternacional;

    let relacionFFAA = parseFloat(document.getElementById("relacionFFAA").value);
    let porcentajeFFAA = relacionFFAA;

    // Calcular el promedio de los tres valores numéricos
    let promedio = ((porcentajeNacional + porcentajeInternacional + porcentajeFFAA) / 3).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("porcentajeAprobacion").textContent = porcentajeNacional.toFixed(2) + "%";
    document.getElementById("porcentajeAprobacionInternacional").textContent = porcentajeInternacional.toFixed(2) + "%";
    document.getElementById("porcentajeFFAA").textContent = porcentajeFFAA.toFixed(2) + "%";
    document.getElementById("resultadoPoder").textContent = parseFloat(promedio).toFixed(2) + "%";

    // Guardamos el resultado para usarlo luego
    nivelPoderCalculado = parseFloat(promedio);  // Guardamos el nivel de poder calculado
}



function guardarValores() {
    let valorNacional = document.getElementById("nivelAprobacion").value;
    let porcentajeNacional = valorNacional; // No dividir por 100

    let valorInternacional = document.getElementById("nivelAprobacionInternacional").value;
    let porcentajeInternacional = valorInternacional; // No dividir por 100

    let relacionFFAA = document.getElementById("relacionFFAA").value;

    localStorage.setItem("nivelAprobacion", valorNacional);
    localStorage.setItem("porcentajeAprobacion", porcentajeNacional);
    localStorage.setItem("nivelAprobacionInternacional", valorInternacional);
    localStorage.setItem("porcentajeAprobacionInternacional", porcentajeInternacional);
    localStorage.setItem("relacionFFAA", relacionFFAA);

    alert('Valores guardados correctamente');
}

function seleccionarOpcion(opcion) {
    alert('Seleccionaste: ' + opcion);
}

// Abrir la sección Coeficiente Multiplicador cuando se hace clic en "Coeficiente Multiplicador"
function mostrarCoeficienteMultiplicador() {
    document.getElementById("nivelPoderSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorSection").style.display = "block";
}

// Función para abrir el modal de Coeficiente Multiplicador
function abrirModalCoeficiente() {
    const modal = document.getElementById("modalLiderazgo");
    modal.style.display = "block";

    // Ocultar la sección de Nivel de Poder y mostrar la sección de Coeficiente Multiplicador
    document.getElementById("nivelPoderSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorSection").style.display = "block";

    // Cargar valores guardados al abrir el modal
    let historialConflicto = localStorage.getItem("historialConflicto") || 100;
    document.getElementById("historialConflicto").value = historialConflicto;

    let relacionFFAACoef = localStorage.getItem("relacionFFAACoef") || 100;
    document.getElementById("relacionFFAACoef").value = relacionFFAACoef;

    calcularCoeficiente();
}

// Función para calcular el porcentaje del Coeficiente Multiplicador
function calcularCoeficiente() {
    let historialConflicto = parseFloat(document.getElementById("historialConflicto").value);
    let relacionFFAACoef = parseFloat(document.getElementById("relacionFFAACoef").value);

    // Calcular el promedio de los dos valores
    let promedio = ((historialConflicto + relacionFFAACoef) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("porcentajeConflicto").textContent = historialConflicto.toFixed(2) + "%";
    document.getElementById("porcentajeFFAACoef").textContent = relacionFFAACoef.toFixed(2) + "%";
    document.getElementById("resultadoCoeficiente").textContent = parseFloat(promedio).toFixed(2) + "%";

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historialConflicto", historialConflicto);
    localStorage.setItem("relacionFFAACoef", relacionFFAACoef);
}

// Al pasar el mouse sobre la opción de "Coeficiente Multiplicador", mostrar el resultado calculado
document.addEventListener("DOMContentLoaded", function () {
    const filasTabla = document.querySelectorAll(".tabla-opciones tbody tr");

    filasTabla.forEach(fila => {
        fila.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#4CAF50";
            this.style.color = "white";
            this.style.cursor = "pointer";

            // Si la categoría es "Coeficiente Multiplicador", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "coeficiente") {
                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("nivelPoderTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficiente").textContent}`;
            }
        });

        fila.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
            this.style.color = "black";
        });

        fila.addEventListener("click", function () {
            const categoria = this.dataset.value;
            console.log(`Seleccionaste: ${categoria}`);
            ejecutarCategoria(categoria);
        });
    });
});

function abrirModalControlInterno() {
    const modal = document.getElementById("modalControlInterno");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    let talaIlegal = localStorage.getItem("talaIlegal") || 0;
    document.getElementById("talaIlegal").value = talaIlegal;

    let tid = localStorage.getItem("tid") || 0;
    document.getElementById("tid").value = tid;

    let crimenOrganizado = localStorage.getItem("crimenOrganizado") || 0;
    document.getElementById("crimenOrganizado").value = crimenOrganizado;

    calcularPorcentajeControlInterno();
}

function cerrarModalControlInterno() {
    const modal = document.getElementById("modalControlInterno");
    modal.style.display = "none";
}

function mostrarNivelPoderControlInterno() {
    document.getElementById("nivelPoderControlInternoSection").style.display = "block";
    document.getElementById("coeficienteMultiplicadorControlInternoSection").style.display = "none";
}

function mostrarCoeficienteMultiplicadorControlInterno() {
    document.getElementById("nivelPoderControlInternoSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorControlInternoSection").style.display = "block";
}

// Asumimos que el cálculo del "Nivel de Poder" ya se realiza dentro de la función calcularPorcentajeControlInterno()
let nivelPoderControlInternoCalculado = 0; // Variable para almacenar el resultado calculado

function calcularPorcentajeControlInterno() {
    let talaIlegal = parseFloat(document.getElementById("talaIlegal").value);
    let tid = parseFloat(document.getElementById("tid").value);
    let crimenOrganizado = parseFloat(document.getElementById("crimenOrganizado").value);

    // Calcular el promedio de los tres valores numéricos
    let promedio = ((talaIlegal + tid + crimenOrganizado) / 3).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("resultadoControlInterno").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    nivelPoderControlInternoCalculado = parseFloat(promedio);  // Guardamos el nivel de poder calculado
}

function calcularCoeficienteControlInterno() {
    let historicoSimultaneidad = parseFloat(document.getElementById("historicoSimultaneidad").value);
    let historicoPoderConflicto = parseFloat(document.getElementById("historicoPoderConflicto").value);

    // Calcular el promedio de los dos valores
    let promedio = ((historicoSimultaneidad + historicoPoderConflicto) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("resultadoCoeficienteControlInterno").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historicoSimultaneidad", historicoSimultaneidad);
    localStorage.setItem("historicoPoderConflicto", historicoPoderConflicto);
}

function guardarValoresControlInterno() {
    let talaIlegal = document.getElementById("talaIlegal").value;
    let tid = document.getElementById("tid").value;
    let crimenOrganizado = document.getElementById("crimenOrganizado").value;

    localStorage.setItem("talaIlegal", talaIlegal);
    localStorage.setItem("tid", tid);
    localStorage.setItem("crimenOrganizado", crimenOrganizado);

    alert('Valores guardados correctamente');
}

function abrirModalEconomica() {
    const modal = document.getElementById("modalEconomica");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    let pbiCantidadActual = localStorage.getItem("pbiCantidadActual") || 0;
    document.getElementById("pbiCantidadActual").value = pbiCantidadActual;

    let inflacionTipoCambio = localStorage.getItem("inflacionTipoCambio") || 0;
    document.getElementById("inflacionTipoCambio").value = inflacionTipoCambio;

    let produccion = localStorage.getItem("produccion") || 0;
    document.getElementById("produccion").value = produccion;

    let sectorExterno = localStorage.getItem("sectorExterno") || 0;
    document.getElementById("sectorExterno").value = sectorExterno;

    let sectorPublicoNoFinanciero = localStorage.getItem("sectorPublicoNoFinanciero") || 0;
    document.getElementById("sectorPublicoNoFinanciero").value = sectorPublicoNoFinanciero;

    let saldoDeudaPublica = localStorage.getItem("saldoDeudaPublica") || 0;
    document.getElementById("saldoDeudaPublica").value = saldoDeudaPublica;

    calcularPorcentajeEconomica();
}

function cerrarModalEconomica() {
    const modal = document.getElementById("modalEconomica");
    modal.style.display = "none";
}

function mostrarNivelPoderEconomica() {
    document.getElementById("nivelPoderEconomicaSection").style.display = "block";
    document.getElementById("coeficienteMultiplicadorEconomicaSection").style.display = "none";
}

function mostrarCoeficienteMultiplicadorEconomica() {
    document.getElementById("nivelPoderEconomicaSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorEconomicaSection").style.display = "block";
}

// Asumimos que el cálculo del "Nivel de Poder" ya se realiza dentro de la función calcularPorcentajeEconomica()
let nivelPoderEconomicaCalculado = 0; // Variable para almacenar el resultado calculado

function calcularPorcentajeEconomica() {
    let pbiCantidadActual = parseFloat(document.getElementById("pbiCantidadActual").value);
    let inflacionTipoCambio = parseFloat(document.getElementById("inflacionTipoCambio").value);
    let produccion = parseFloat(document.getElementById("produccion").value);
    let sectorExterno = parseFloat(document.getElementById("sectorExterno").value);
    let sectorPublicoNoFinanciero = parseFloat(document.getElementById("sectorPublicoNoFinanciero").value);
    let saldoDeudaPublica = parseFloat(document.getElementById("saldoDeudaPublica").value);

    // Calcular el promedio de los valores de economía regional
    let promedioEconomiaRegional = ((inflacionTipoCambio + produccion + sectorExterno + sectorPublicoNoFinanciero + saldoDeudaPublica) / 5).toFixed(2);

    // Calcular el promedio de PBI y economía regional
    let promedio = ((pbiCantidadActual + parseFloat(promedioEconomiaRegional)) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("resultadoEconomica").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    nivelPoderEconomicaCalculado = parseFloat(promedio);  // Guardamos el nivel de poder calculado
}

function calcularCoeficienteEconomica() {
    let historicoEconomiaConflicto = parseFloat(document.getElementById("historicoEconomiaConflicto").value);
    let historicoPoderEconomiaConflicto = parseFloat(document.getElementById("historicoPoderEconomiaConflicto").value);

    // Calcular el promedio de los dos valores
    let promedio = ((historicoEconomiaConflicto + historicoPoderEconomiaConflicto) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("resultadoCoeficienteEconomica").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historicoEconomiaConflicto", historicoEconomiaConflicto);
    localStorage.setItem("historicoPoderEconomiaConflicto", historicoPoderEconomiaConflicto);
}

function guardarValoresEconomica() {
    let pbiCantidadActual = document.getElementById("pbiCantidadActual").value;
    let inflacionTipoCambio = document.getElementById("inflacionTipoCambio").value;
    let produccion = document.getElementById("produccion").value;
    let sectorExterno = document.getElementById("sectorExterno").value;
    let sectorPublicoNoFinanciero = document.getElementById("sectorPublicoNoFinanciero").value;
    let saldoDeudaPublica = document.getElementById("saldoDeudaPublica").value;

    localStorage.setItem("pbiCantidadActual", pbiCantidadActual);
    localStorage.setItem("inflacionTipoCambio", inflacionTipoCambio);
    localStorage.setItem("produccion", produccion);
    localStorage.setItem("sectorExterno", sectorExterno);
    localStorage.setItem("sectorPublicoNoFinanciero", sectorPublicoNoFinanciero);
    localStorage.setItem("saldoDeudaPublica", saldoDeudaPublica);

    alert('Valores guardados correctamente');
}

function abrirModalPolitica() {
    const modal = document.getElementById("modalPolitica");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    let historicoPoderEconomiaConflicto = localStorage.getItem("historicoPoderEconomiaConflicto") || 0;
    document.getElementById("historicoPoderEconomiaConflicto").value = historicoPoderEconomiaConflicto;

    let nivelAprobacionInternacional = localStorage.getItem("nivelAprobacionInternacional") || 0;
    document.getElementById("nivelAprobacionInternacional").value = nivelAprobacionInternacional;

    let relacionFFAAEstado = localStorage.getItem("relacionFFAAEstado") || 0;
    document.getElementById("relacionFFAAEstado").value = relacionFFAAEstado;

    calcularPorcentajePolitica();
}

function cerrarModalPolitica() {
    const modal = document.getElementById("modalPolitica");
    modal.style.display = "none";
}

function mostrarNivelPoderPolitica() {
    document.getElementById("nivelPoderPoliticaSection").style.display = "block";
    document.getElementById("coeficienteMultiplicadorPoliticaSection").style.display = "none";
}

function mostrarCoeficienteMultiplicadorPolitica() {
    document.getElementById("nivelPoderPoliticaSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorPoliticaSection").style.display = "block";
}

// Asumimos que el cálculo del "Nivel de Poder" ya se realiza dentro de la función calcularPorcentajePolitica()
let nivelPoderPoliticaCalculado = 0; // Variable para almacenar el resultado calculado

function calcularPorcentajePolitica() {
    let historicoPoderEconomiaConflicto = parseFloat(document.getElementById("historicoPoderEconomiaConflicto").value);
    let nivelAprobacionInternacional = parseFloat(document.getElementById("nivelAprobacionInternacional").value);
    let relacionFFAAEstado = parseFloat(document.getElementById("relacionFFAAEstado").value);

    // Calcular el promedio de los tres valores numéricos
    let promedio = ((historicoPoderEconomiaConflicto + nivelAprobacionInternacional + relacionFFAAEstado) / 3).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("resultadoPolitica").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    nivelPoderPoliticaCalculado = parseFloat(promedio);  // Guardamos el nivel de poder calculado
}

function calcularCoeficientePolitica() {
    let historicoSimultaneidad = parseFloat(document.getElementById("historicoSimultaneidadPolitica").value);
    let historicoPoderConflicto = parseFloat(document.getElementById("historicoPoderConflictoPolitica").value);

    // Calcular el promedio de los dos valores
    let promedio = ((historicoSimultaneidad + historicoPoderConflicto) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("resultadoCoeficientePolitica").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historicoSimultaneidadPolitica", historicoSimultaneidad);
    localStorage.setItem("historicoPoderConflictoPolitica", historicoPoderConflicto);
}

function guardarValoresPolitica() {
    let historicoPoderEconomiaConflicto = document.getElementById("historicoPoderEconomiaConflicto").value;
    let nivelAprobacionInternacional = document.getElementById("nivelAprobacionInternacional").value;
    let relacionFFAAEstado = document.getElementById("relacionFFAAEstado").value;

    localStorage.setItem("historicoPoderEconomiaConflicto", historicoPoderEconomiaConflicto);
    localStorage.setItem("nivelAprobacionInternacional", nivelAprobacionInternacional);
    localStorage.setItem("relacionFFAAEstado", relacionFFAAEstado);

    alert('Valores guardados correctamente');
}

function abrirModalInfraestructura() {
    const modal = document.getElementById("modalInfraestructura");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    let indiceGlobalInfraestructura = localStorage.getItem("indiceGlobalInfraestructura") || 0;
    document.getElementById("indiceGlobalInfraestructura").value = indiceGlobalInfraestructura;

    let aeropuertos = localStorage.getItem("aeropuertos") || 0;
    document.getElementById("aeropuertos").value = aeropuertos;

    let autopistas = localStorage.getItem("autopistas") || 0;
    document.getElementById("autopistas").value = autopistas;

    let redVialLocal = localStorage.getItem("redVialLocal") || 0;
    document.getElementById("redVialLocal").value = redVialLocal;

    let infraestructuraFerroviaria = localStorage.getItem("infraestructuraFerroviaria") || 0;
    document.getElementById("infraestructuraFerroviaria").value = infraestructuraFerroviaria;

    let viviendas = localStorage.getItem("viviendas") || 0;
    document.getElementById("viviendas").value = viviendas;

    let defensaInundaciones = localStorage.getItem("defensaInundaciones") || 0;
    document.getElementById("defensaInundaciones").value = defensaInundaciones;

    let infraestructuraDigital = localStorage.getItem("infraestructuraDigital") || 0;
    document.getElementById("infraestructuraDigital").value = infraestructuraDigital;

    let abastecimientoAgua = localStorage.getItem("abastecimientoAgua") || 0;
    document.getElementById("abastecimientoAgua").value = abastecimientoAgua;

    let energiasRenovables = localStorage.getItem("energiasRenovables") || 0;
    document.getElementById("energiasRenovables").value = energiasRenovables;

    calcularPorcentajeInfraestructura();
}

function cerrarModalInfraestructura() {
    const modal = document.getElementById("modalInfraestructura");
    modal.style.display = "none";
}

function mostrarNivelPoderInfraestructura() {
    document.getElementById("nivelPoderInfraestructuraSection").style.display = "block";
    document.getElementById("coeficienteMultiplicadorInfraestructuraSection").style.display = "none";
}

function mostrarCoeficienteMultiplicadorInfraestructura() {
    document.getElementById("nivelPoderInfraestructuraSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorInfraestructuraSection").style.display = "block";
}

// Asumimos que el cálculo del "Nivel de Poder" ya se realiza dentro de la función calcularPorcentajeInfraestructura()
let nivelPoderInfraestructuraCalculado = 0; // Variable para almacenar el resultado calculado

function calcularPorcentajeInfraestructura() {
    let indiceGlobalInfraestructura = parseFloat(document.getElementById("indiceGlobalInfraestructura").value);
    let aeropuertos = parseFloat(document.getElementById("aeropuertos").value);
    let autopistas = parseFloat(document.getElementById("autopistas").value);
    let redVialLocal = parseFloat(document.getElementById("redVialLocal").value);
    let infraestructuraFerroviaria = parseFloat(document.getElementById("infraestructuraFerroviaria").value);
    let viviendas = parseFloat(document.getElementById("viviendas").value);
    let defensaInundaciones = parseFloat(document.getElementById("defensaInundaciones").value);
    let infraestructuraDigital = parseFloat(document.getElementById("infraestructuraDigital").value);
    let abastecimientoAgua = parseFloat(document.getElementById("abastecimientoAgua").value);
    let energiasRenovables = parseFloat(document.getElementById("energiasRenovables").value);

    // Calcular el promedio de los valores de infraestructura regional
    let promedioInfraestructuraRegional = ((aeropuertos + autopistas + redVialLocal + infraestructuraFerroviaria + viviendas + defensaInundaciones + infraestructuraDigital + abastecimientoAgua + energiasRenovables) / 9).toFixed(2);

    // Calcular el promedio de infraestructura nacional y regional
    let promedio = ((indiceGlobalInfraestructura + parseFloat(promedioInfraestructuraRegional)) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("resultadoInfraestructura").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    nivelPoderInfraestructuraCalculado = parseFloat(promedio);  // Guardamos el nivel de poder calculado
}

function calcularCoeficienteInfraestructura() {
    let historicoInfraestructuraConflicto = parseFloat(document.getElementById("historicoInfraestructuraConflicto").value);
    let historicoPoderInfraestructuraConflicto = parseFloat(document.getElementById("historicoPoderInfraestructuraConflicto").value);
    let doctrinaInfraestructuraConflicto = parseFloat(document.getElementById("doctrinaInfraestructuraConflicto").value);

    // Calcular el promedio de los tres valores
    let promedio = ((historicoInfraestructuraConflicto + historicoPoderInfraestructuraConflicto + doctrinaInfraestructuraConflicto) / 3).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("resultadoCoeficienteInfraestructura").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historicoInfraestructuraConflicto", historicoInfraestructuraConflicto);
    localStorage.setItem("historicoPoderInfraestructuraConflicto", historicoPoderInfraestructuraConflicto);
    localStorage.setItem("doctrinaInfraestructuraConflicto", doctrinaInfraestructuraConflicto);
}

function guardarValoresInfraestructura() {
    let indiceGlobalInfraestructura = document.getElementById("indiceGlobalInfraestructura").value;
    let aeropuertos = document.getElementById("aeropuertos").value;
    let autopistas = document.getElementById("autopistas").value;
    let redVialLocal = document.getElementById("redVialLocal").value;
    let infraestructuraFerroviaria = document.getElementById("infraestructuraFerroviaria").value;
    let viviendas = document.getElementById("viviendas").value;
    let defensaInundaciones = document.getElementById("defensaInundaciones").value;
    let infraestructuraDigital = document.getElementById("infraestructuraDigital").value;
    let abastecimientoAgua = document.getElementById("abastecimientoAgua").value;
    let energiasRenovables = document.getElementById("energiasRenovables").value;

    localStorage.setItem("indiceGlobalInfraestructura", indiceGlobalInfraestructura);
    localStorage.setItem("aeropuertos", aeropuertos);
    localStorage.setItem("autopistas", autopistas);
    localStorage.setItem("redVialLocal", redVialLocal);
    localStorage.setItem("infraestructuraFerroviaria", infraestructuraFerroviaria);
    localStorage.setItem("viviendas", viviendas);
    localStorage.setItem("defensaInundaciones", defensaInundaciones);
    localStorage.setItem("infraestructuraDigital", infraestructuraDigital);
    localStorage.setItem("abastecimientoAgua", abastecimientoAgua);
    localStorage.setItem("energiasRenovables", energiasRenovables);

    alert('Valores guardados correctamente');
}

// Variables para almacenar los resultados calculados
let nivelPoderTerrorismoCalculado = 0;

// Función para calcular el porcentaje de Terrorismo
function calcularPorcentajeTerrorismo() {
    let accionesTerroristasNacional = parseFloat(document.getElementById("accionesTerroristasNacional").value) || 0;
    let victimasMortalesNacional = parseFloat(document.getElementById("victimasMortalesNacional").value) || 0;
    let heridosNacional = parseFloat(document.getElementById("heridosNacional").value) || 0;

    let accionesTerroristasRegional = parseFloat(document.getElementById("accionesTerroristasRegional").value) || 0;
    let victimasMortalesRegional = parseFloat(document.getElementById("victimasMortalesRegional").value) || 0;
    let heridosRegional = parseFloat(document.getElementById("heridosRegional").value) || 0;

    let accionesTerroristasRemanentes = parseFloat(document.getElementById("accionesTerroristasRemanentes").value) || 0;
    let victimasMortalesRemanentes = parseFloat(document.getElementById("victimasMortalesRemanentes").value) || 0;
    let heridosRemanentes = parseFloat(document.getElementById("heridosRemanentes").value) || 0;

    // Calcular el promedio de cada sección
    let promedioNacional = ((accionesTerroristasNacional + victimasMortalesNacional + heridosNacional) / 3).toFixed(2);
    let promedioRegional = ((accionesTerroristasRegional + victimasMortalesRegional + heridosRegional) / 3).toFixed(2);
    let promedioRemanentes = ((accionesTerroristasRemanentes + victimasMortalesRemanentes + heridosRemanentes) / 3).toFixed(2);

    // Calcular el promedio total
    let promedioTotal = ((parseFloat(promedioNacional) + parseFloat(promedioRegional) + parseFloat(promedioRemanentes)) / 3).toFixed(2);

    // Mostrar los resultados como porcentaje en los elementos
    document.getElementById("resultadoTerrorismo").textContent = parseFloat(promedioTotal).toFixed(2);

    // Guardamos el resultado para usarlo luego
    nivelPoderTerrorismoCalculado = parseFloat(promedioTotal);
}

// Función para calcular el coeficiente de Terrorismo
function calcularCoeficienteTerrorismo() {
    let historicoTerrorismo = parseFloat(document.getElementById("historicoTerrorismo").value) || 0;
    let relacionFFAAEstadoTerrorismo = parseFloat(document.getElementById("relacionFFAAEstadoTerrorismo").value) || 0;

    // Calcular el promedio de los dos valores
    let promedio = ((historicoTerrorismo + relacionFFAAEstadoTerrorismo) / 2).toFixed(2);

    // Mostrar los resultados como porcentaje
    document.getElementById("resultadoCoeficienteTerrorismo").textContent = parseFloat(promedio).toFixed(2);

    // Guardamos el resultado para usarlo luego
    localStorage.setItem("historicoTerrorismo", historicoTerrorismo);
    localStorage.setItem("relacionFFAAEstadoTerrorismo", relacionFFAAEstadoTerrorismo);
}

// Función para guardar los valores de Terrorismo
function guardarValoresTerrorismo() {
    let accionesTerroristasNacional = document.getElementById("accionesTerroristasNacional").value;
    let victimasMortalesNacional = document.getElementById("victimasMortalesNacional").value;
    let heridosNacional = document.getElementById("heridosNacional").value;

    let accionesTerroristasRegional = document.getElementById("accionesTerroristasRegional").value;
    let victimasMortalesRegional = document.getElementById("victimasMortalesRegional").value;
    let heridosRegional = document.getElementById("heridosRegional").value;

    let accionesTerroristasRemanentes = document.getElementById("accionesTerroristasRemanentes").value;
    let victimasMortalesRemanentes = document.getElementById("victimasMortalesRemanentes").value;
    let heridosRemanentes = document.getElementById("heridosRemanentes").value;

    localStorage.setItem("accionesTerroristasNacional", accionesTerroristasNacional);
    localStorage.setItem("victimasMortalesNacional", victimasMortalesNacional);
    localStorage.setItem("heridosNacional", heridosNacional);

    localStorage.setItem("accionesTerroristasRegional", accionesTerroristasRegional);
    localStorage.setItem("victimasMortalesRegional", victimasMortalesRegional);
    localStorage.setItem("heridosRegional", heridosRegional);

    localStorage.setItem("accionesTerroristasRemanentes", accionesTerroristasRemanentes);
    localStorage.setItem("victimasMortalesRemanentes", victimasMortalesRemanentes);
    localStorage.setItem("heridosRemanentes", heridosRemanentes);

    alert('Valores guardados correctamente');
}

// Funciones para abrir y cerrar el modal de Terrorismo
function abrirModalTerrorismo() {
    const modal = document.getElementById("modalTerrorismo");
    modal.style.display = "block";

    // Cargar valores guardados al abrir el modal
    document.getElementById("accionesTerroristasNacional").value = localStorage.getItem("accionesTerroristasNacional") || 0;
    document.getElementById("victimasMortalesNacional").value = localStorage.getItem("victimasMortalesNacional") || 0;
    document.getElementById("heridosNacional").value = localStorage.getItem("heridosNacional") || 0;

    document.getElementById("accionesTerroristasRegional").value = localStorage.getItem("accionesTerroristasRegional") || 0;
    document.getElementById("victimasMortalesRegional").value = localStorage.getItem("victimasMortalesRegional") || 0;
    document.getElementById("heridosRegional").value = localStorage.getItem("heridosRegional") || 0;

    document.getElementById("accionesTerroristasRemanentes").value = localStorage.getItem("accionesTerroristasRemanentes") || 0;
    document.getElementById("victimasMortalesRemanentes").value = localStorage.getItem("victimasMortalesRemanentes") || 0;
    document.getElementById("heridosRemanentes").value = localStorage.getItem("heridosRemanentes") || 0;

    calcularPorcentajeTerrorismo();
}

function cerrarModalTerrorismo() {
    const modal = document.getElementById("modalTerrorismo");
    modal.style.display = "none";
}

function mostrarNivelPoderTerrorismo() {
    document.getElementById("nivelPoderTerrorismoSection").style.display = "block";
    document.getElementById("coeficienteMultiplicadorTerrorismoSection").style.display = "none";
}

function mostrarCoeficienteMultiplicadorTerrorismo() {
    document.getElementById("nivelPoderTerrorismoSection").style.display = "none";
    document.getElementById("coeficienteMultiplicadorTerrorismoSection").style.display = "block";
}

// Actualizar la tabla derecha con el resultado calculado
document.addEventListener("DOMContentLoaded", function () {
    const filasTabla = document.querySelectorAll(".tabla-opciones tbody tr");

    filasTabla.forEach(fila => {
        fila.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#4CAF50";
            this.style.color = "white";
            this.style.cursor = "pointer";

            // Si la categoría es "Terrorismo", actualizar la tabla con el resultado calculado
            if (this.dataset.value === "terrorismo") {
                // Actualizamos el valor de "Nivel de Poder" en la tabla derecha
                const nivelPoderElemento = document.getElementById("nivelPoderTabla");
                nivelPoderElemento.textContent = `${nivelPoderTerrorismoCalculado}%`;

                // Actualizamos el valor de "Coeficiente Multiplicador" en la tabla derecha
                const coeficienteElemento = document.getElementById("coeficienteTabla");
                coeficienteElemento.textContent = `${document.getElementById("resultadoCoeficienteTerrorismo").textContent}`;

                // Calcular y mostrar el resultado en la tabla derecha
                const resultadoElemento = document.getElementById("resultadoTabla");
                const nivelPoder = parseFloat(nivelPoderTerrorismoCalculado);
                const coeficiente = parseFloat(document.getElementById("resultadoCoeficienteTerrorismo").textContent);
                resultadoElemento.textContent = (nivelPoder * coeficiente).toFixed(2);
            }
        });

        fila.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white";
            this.style.color = "black";
        });

        fila.addEventListener("click", function () {
            const categoria = this.dataset.value;
            if (categoria === "terrorismo") {
                abrirModalTerrorismo();
            }
        });
    });
});

// Función para calcular el resultado total
function calcularResultadoTotal() {
    const resultados = [
        parseFloat(document.getElementById("resultadoPoder").textContent) || 0,
        parseFloat(document.getElementById("resultadoSociedad").textContent) || 0,
        parseFloat(document.getElementById("resultadoControlInterno").textContent) || 0,
        parseFloat(document.getElementById("resultadoEconomica").textContent) || 0,
        parseFloat(document.getElementById("resultadoPolitica").textContent) || 0,
        parseFloat(document.getElementById("resultadoInfraestructura").textContent) || 0,
        parseFloat(document.getElementById("resultadoTerrorismo").textContent) || 0
    ];

    const sumaResultados = resultados.reduce((acc, val) => acc + val, 0);
    const promedioResultados = (sumaResultados / 7).toFixed(2); // Dividir entre 7 categorías

    document.getElementById("resultadoTotal").textContent = promedioResultados;
}

// Llamar a la función calcularResultadoTotal cada vez que se actualice un resultado
document.querySelectorAll(".tabla-opciones tbody tr").forEach(fila => {
    fila.addEventListener("mouseenter", function () {
        calcularResultadoTotal();
    });
});


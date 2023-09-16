
// Obtener elementos del DOM
const montoInput = document.getElementById("monto");
const porcentajeInput = document.getElementById("porcentaje");
const otroPorcentajeInput = document.getElementById("otroPorcentaje");
const personasInput = document.getElementById("personas");
const redondearSelect = document.getElementById("redondear");
const calcularButton = document.getElementById("calcular");
const imprimirButton = document.getElementById("imprimir");
const enviarCorreoLink = document.getElementById("enviarCorreo");
const montoPropinaSpan = document.getElementById("montoPropina");
const totalPagarSpan = document.getElementById("totalPagar");
const totalPersonaSpan = document.getElementById("totalPersona");

// Manejar el evento de clic en el botón "Calcular"
calcularButton.addEventListener("click", function () {
    const monto = parseFloat(montoInput.value) || 0;
    const porcentaje = parseFloat(porcentajeInput.value) || 0;
    const otroPorcentaje = parseFloat(otroPorcentajeInput.value) || 0;
    const personas = parseInt(personasInput.value) || 1;
    const redondear = redondearSelect.value;

    const propina = (monto * porcentaje) / 100 + (monto * otroPorcentaje) / 100;
    let total = monto + propina;

    if (redondear === "redondearAbajo") {
        total = Math.floor(total);
    } else if (redondear === "redondearArriba") {
        total = Math.ceil(total);
    }

    const totalPorPersona = total / personas;

    montoPropinaSpan.textContent = `$${propina.toFixed(2)}`;
    totalPagarSpan.textContent = `$${total.toFixed(2)}`;
    totalPersonaSpan.textContent = `$${totalPorPersona.toFixed(2)}`;
});

// Manejar el evento de clic en el botón "Imprimir"
imprimirButton.addEventListener("click", function () {
    window.print();
});

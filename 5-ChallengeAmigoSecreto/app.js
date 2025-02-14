let nombres = [];
let nombresDisponibles = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const mensaje = document.getElementById("mensaje");

    if (nombre) {
        if (nombres.includes(nombre)) {
            mensaje.textContent = "Nombre repetido.";
            mensaje.style.color = "red";
        } else {
            nombres.push(nombre);
            nombresDisponibles.push(nombre);
            actualizarLista();
            mensaje.textContent = "";
        }
    }
    input.value = "";
}

function eliminarAmigo(nombre) {
    nombres = nombres.filter(n => n !== nombre);
    nombresDisponibles = nombresDisponibles.filter(n => n !== nombre);
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(nombre);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const mensaje = document.getElementById("mensaje");
    
    if (nombresDisponibles.length === 0) {
        mensaje.textContent = "Todos los nombres han sido sorteados. ¿Desea reiniciar?";
        mensaje.style.color = "blue";
        return;
    }
    
    const indice = Math.floor(Math.random() * nombresDisponibles.length);
    const nombreSorteado = nombresDisponibles.splice(indice, 1)[0];
    
    resultado.textContent = `Amigo Secreto: ${nombreSorteado}`;
}

function reiniciarSorteo() {
    nombresDisponibles = [...nombres];
    document.getElementById("resultado").textContent = "";
    document.getElementById("mensaje").textContent = "";
}

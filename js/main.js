// Lista de tareas
let tareas = [];

//Ingreso de tareas
document.addEventListener("DOMContentLoaded", function () {
  cargarTareas();
});

function cargarTareas() {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  const tareas = obtenerTareasDesdeLocalStorage() || [];


//Al precionar en la tarea indica si esta pendiente o por completada
  tareas.forEach((tarea, indice) => {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = `${indice + 1}. ${tarea.descripcion} - Estado: ${tarea.completada ? 'Completada' : 'Pendiente'}`;
    nuevaTarea.addEventListener("click", function () {
      marcarComoCompletada(indice);
    });

    listaTareas.appendChild(nuevaTarea);
  });
}

function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const nuevaTarea = nuevaTareaInput.value.trim();

  if (nuevaTarea !== "") {
    const tareas = obtenerTareasDesdeLocalStorage() || [];
    tareas.push({ descripcion: nuevaTarea, completada: false });
    guardarTareasEnLocalStorage(tareas);
    cargarTareas();
    nuevaTareaInput.value = "";
  }
}

function marcarComoCompletada(indice) {
  const tareas = obtenerTareasDesdeLocalStorage() || [];

  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = !tareas[indice].completada;
    guardarTareasEnLocalStorage(tareas);
    cargarTareas();
  }
}

function obtenerTareasDesdeLocalStorage() {
  const tareasGuardadas = localStorage.getItem("tareas");
  return JSON.parse(tareasGuardadas);
}

function guardarTareasEnLocalStorage(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}
fetch("data/data.json")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(ErrorSolicitud ,$,{error,message}));

window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 1000 
  });
}



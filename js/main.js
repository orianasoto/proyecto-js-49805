// Lista de tareas
let tareas = [];

// Agregar tarea
function agregarTarea(tarea) {
  tareas.push(tarea);
  console.log(`Tarea "${tarea}" agregada.`);
}

// Las tareas
function mostrarTareas() {
  console.log("Lista de tareas:");

  if (tareas.length === 0) {
    console.log("¡La lista de tareas está vacía!");
  } else {
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea}`);
    });
  }
}

// Interactividad
while (true) {
  const Usuario = prompt("Ingrese una tarea (o escriba 'x' para salir):");

  if (Usuario.toLowerCase() === "x") {
    console.log("Saliendo del programa. Lista final de tareas:");
    mostrarTareas();
    break;
  } else {
    agregarTarea(Usuario);
    mostrarTareas();
  }
}

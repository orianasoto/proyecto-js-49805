// Lista de tareas
let tareas = [];


// Agregar tarea
function agregarTarea(tarea, estado = "pendiente") {
  const tareaObjeto = { tarea, estado };
  tareas.push(tareaObjeto);
  console.log(`Tarea "${tarea}" agregada.`);
}

// Mostrar todas las tareas
function mostrarTareas() {
  console.log("Lista de tareas:");

  if (tareas.length === 0) {
    console.log("¡La lista de tareas está vacía!");
  } else {
    for (let indice = 0; indice < tareas.length; indice++) {
      console.log(`${indice + 1}. Tarea: ${tareas[indice].tarea} - Estado: ${tareas[indice].estado}`);
    }
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

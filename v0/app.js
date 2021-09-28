//Declarar variables
const nuevaTareaInput = document.getElementById("nuevaTareaInput");
const agregarBtn = document.getElementById("agregarBtn"); //boton agregar
const lista = document.getElementById("lista"); //listas de tareas
//const checkbox = document.getElementById("checkbox");
agregarBtn.addEventListener("click", function(e){
    e.preventDefault();
    const textoDeLaTarea = nuevaTareaInput.value;
    agregarTarea(textoDeLaTarea);
} );
function agregarTarea(texto){
    const nuevoli =  document.createElement("li");
    nuevoli.innerHTML = 
    `
    <input type="checkbox" id="checkbox">
    <label for="Tarea">${texto} </label>
    <button onclick="eliminarTarea(this)">Eliminar</button>
    `;
    lista.prepend(nuevoli);

}
function eliminarTarea(e){
    e.parentElement.remove();
}
function checkbox(e){
   e.parentElement.strike();
}

//text-decoration-line: line-through;
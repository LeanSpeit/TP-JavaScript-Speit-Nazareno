function agregarTarea(){
    let tarea=prompt("Ingrese la tarea");
    let Space=tarea.trim();
    if(Space.length==0){
        alert("La tarea esta vacía");
    }else{
        listTar.push(Space);
        alert("La tarea se agregó correctamente.");
    }
}
function listarTareas(){
    let tareas="";
    if(listTar.length==0){
        alert("No hay tareas");
    }else{
        for(let i=0;i<listTar.length;i++){
            if(i==listTar.length-1){
                tareas+=listTar[i]+".";
            }else{
                tareas+=listTar[i]+", ";
            }
        }
        alert(tareas);
    }
    
}
function editarTarea(){
    let tarea;
    let tarNom=prompt("Ingrese el nombre de la tarea a editar: ");
    let tarNomSpace=tarNom.trim();
    if(tarNomSpace.length==0){
        alert("El nombre de la tarea esta vacío");
    }else{
        if(listTar.includes(tarNomSpace)){
            tarea=prompt("Ingrese un nuevo nombre de tarea: ");
            if(tarea.length==0 || listTar.includes(tarea)){
                alert("nombre no válido");
            }else{
                listTar.splice(listTar.indexOf(tarNomSpace),1,tarea);
                alert("la tarea se editó correctamente")
            }
        }else{
            alert("La tarea no existe");
        }
    }
}

function eliminarTarea(){
    let tarNom=prompt("Ingrese el nombre de la tarea a eliminar: ");
    let tarNomSpace=tarNom.trim();
    if(listTar.includes(tarNomSpace)){
        listTar.splice(listTar.indexOf(tarNomSpace),1);
        alert("la tarea se eliminó correctamente")
    }else{
        alert("La tarea no existe");
    }
}

let listTar=[];
let option;
let c=1;
while(c!=0){
    option=parseInt(prompt(`ingrese una de las opciones:
    1)Agregar tarea
    2)Listar tareas
    3)Editar tareas
    4)Eliminar tareas
    5)Salir`));
    switch(option){
        case 1:
            agregarTarea();
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 5:
            alert("Adiós");
            c=0;
            break;
        default:
            alert("Ingrese una opcion válida");
            break;
    }
}
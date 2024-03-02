// $(document).ready(function(){
//     $('#TableTesistas').DataTable();
// });
new DataTable('#TableTesistas');


//
const modalEditarTesista = new bootstrap.Modal(document.getElementById('modalTesistaUpdate'))


const on = (element, event, selector, handler) => {
    element.addEventListener (event, e => {
        if (e.target.closest(selector)){
            handler (e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    Primer_Nombre_editar.value = fila.children[1].innerHTML
    Segundo_Nombre_editar.value = fila.children[2].innerHTML
    Primer_Apellido_editar.value = fila.children[3].innerHTML
    Segundo_Apellido_editar.value = fila.children[4].innerHTML
    Numero_Carnet_editar.value = fila.children[5].innerHTML
    Correo_editar.value = fila.children[6].innerHTML
    Sexo_editar.value = fila.children[7].innerHTML
    Sede_editar.value = fila.children[8].innerHTML
    Programa_editar.value = fila.children[9].innerHTML
    modalEditarTesista.show()

})

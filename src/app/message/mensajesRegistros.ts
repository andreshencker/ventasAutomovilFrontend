import Swal from 'sweetalert2';


export class MensajesRegistros{


  mensaje(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro actualizado con exito¡',
      showConfirmButton: false,
      timer: 1500
    })
  }


}

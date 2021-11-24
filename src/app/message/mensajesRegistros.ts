import Swal from 'sweetalert2';


export class MensajesRegistros{
  RegistroGuardado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro guardado con exito¡',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ErrorRegistro(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error al crear el registro¡',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

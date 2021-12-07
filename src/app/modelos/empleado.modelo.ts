import { ModeloCargoEmpleado } from './cargoEmpleado.modelo';
export class ModeloEmpleado{
    id?:string;
    documento?:string;
    nombres?:string;
    apellidos?:string;
    correo?:string;
    contrasena?:string;
    celular?:string;
    cargoEmpleadoId?:string;
    cargoEmpleado?:ModeloCargoEmpleado[];
}

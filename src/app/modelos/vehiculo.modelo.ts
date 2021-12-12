import { ModeloDetalleVehiculo } from './detalleVehiculo.modelo';
import { ModeloFotoVehiculo } from './fotoVehiculo.modelo';
import { ModeloCatalogoVehiculo } from './catalogoVehiculos.model';
import { ModeloTipoTransaccion } from './tipotransaccion.modelo';
import { ModeloCiudad } from './ciudad.modelo';
export class ModeloVehiculo{
    id?:string;
    color?:string;
    kilometraje?:string;
    modelo?:string;
    descripcion?:string;
   // fecha?: string;
    precio?:number;
    porComision?:number;
    tipoTransaccionId?:string;
    catalogoVehiculoId?:string;
    ciudadId?:string;
    //relaciones
    catalogoVehiculo?:ModeloCatalogoVehiculo;
    ciudad?:ModeloCiudad;
    tipoTrasnsacion?:ModeloTipoTransaccion;
    fotoVehiculo?:ModeloFotoVehiculo[];
    detalleVehiculos?:ModeloDetalleVehiculo[];
}

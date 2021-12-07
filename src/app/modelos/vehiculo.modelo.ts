import { ModeloFotoVehiculo } from './fotoVehiculo.modelo';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipoVehiculo.modelo';
import { TipoVehiculoService } from './../servicios/tipoVehiculo/tipo-vehiculo.service';
import { ModeloMarca } from './marca.modelo';
import { ModeloCatalogoVehiculo } from './catalogoVehiculos.model';
import { ModeloTipoTransaccion } from './tipotransaccion.modelo';
export class ModeloVehiculo{
    id?:string;
    color?:string;
    kilometraje?:string;
    modelo?:string;
    descripcion?:string;
    tipoTransaccionId?:string;
    tipoVehiculoId?:string;
    marcaId?:string
    catalogoVehiculoId?:string;

    //relaciones
    catalogoVehiculo?:ModeloCatalogoVehiculo;
    marca?:ModeloMarca;
    tipoVehiculo?:ModeloFotoVehiculo;
    tipoTrasnsacion?:ModeloTipoTransaccion;
    fotoVehiculo?:ModeloFotoVehiculo[];
}

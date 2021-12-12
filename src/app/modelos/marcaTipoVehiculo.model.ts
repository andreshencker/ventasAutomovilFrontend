import { ModeloTipoVehiculo } from './tipoVehiculo.modelo';
import { ModeloMarca } from './marca.modelo';
export class ModeloMarcaTipoVehiculo{
  id?:string;
  marcaId?:string;
  tipoVehiculoId?:string;
  tipoVehiculo?:ModeloTipoVehiculo;
  marca?:ModeloMarca;
}

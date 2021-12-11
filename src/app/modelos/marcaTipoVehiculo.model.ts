import { ModeloTipoVehiculo } from './tipoVehiculo.modelo';
import { ModeloMarca } from './marca.modelo';
export class ModeloMarcaTipoVehiculo{
  id?:string;
  marcaId?:string;
  tipoVehiculoId?:string;
  tipoVehicilo?:ModeloTipoVehiculo;
  marca?:ModeloMarca;
}

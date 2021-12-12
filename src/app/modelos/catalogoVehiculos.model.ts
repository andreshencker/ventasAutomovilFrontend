import { ModeloMarcaTipoVehiculo } from 'src/app/modelos/marcaTipoVehiculo.model';
export class ModeloCatalogoVehiculo{
  id?:string;
  nombre?:string;
  marcaTipoVehiculoId?:string;
  marcaTipoVehiculo?:ModeloMarcaTipoVehiculo
}

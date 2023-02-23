import { Component } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
 
  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){}

  descripcion: string='';
  valor:number=0;
  opcion:string='ingreso';
  
  tipoOperacion(evento){
    this.opcion = evento.target.value;
    }
  
  agregar(){
    if(this.opcion === "ingreso"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcion,this.valor));
    }else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcion, this.valor));
    }
  }

}

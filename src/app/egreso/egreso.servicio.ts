import { Egreso } from "./egreso.model";

export class EgresoServicio{

    egresos: Egreso[]=[
        //new Egreso('Renta depto',2500),
        //new Egreso('ropa',100)
    ];

    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}
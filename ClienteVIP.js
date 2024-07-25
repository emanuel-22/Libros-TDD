const Cliente = require('./Cliente');

class ClienteVIP extends Cliente {
  bonificacion(monto) {
    if(monto >= this.recargaMinimaBonificable()){
      if(this.recibeBonificacionExtendida())
        return this.bonificacionExtendida(monto)
      else
        return this.bonificacionNormal(monto);
    }
    else{
      return 0;
    };
  }

  recargaMinimaBonificable(){
    return 50;
  }

  bonificacionExtendida(monto){
    return monto * 0.07;
  }

  bonificacionNormal(monto){
    return monto * 0.05;
  }
  recibeBonificacionExtendida(){
    return this.libros().length >= 20;
  }

}

module.exports = ClienteVIP;

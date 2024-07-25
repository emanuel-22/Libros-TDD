class Cliente {
  constructor(nombre) {
    this._nombre = nombre;
    this._credito = 0;
    this._libros = [];
  }

  nombre() {
    return this._nombre;
  }

  bonificacion() {
    return 0;
  }

  recargarCredito(monto) {
    this._credito = this._credito + monto + this.bonificacion(monto);
  }

  comprarLibro(unLibro) {
    if (unLibro.precio() > this._credito) {
      throw new Error('credito insuficiente');
    }
    this._credito -= unLibro.precio();
    this._libros.push(unLibro);
  }

  libros(){
    return this._libros;
  }
  credito(){
    return this._credito;
  }
}

module.exports = Cliente;

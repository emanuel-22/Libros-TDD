class Libro {
  constructor(titulo, autor, costo) {
    this._titulo = titulo;
    this._autor = autor;
    this._costo = costo;
  }

  titulo() {
    return this._titulo;
  }

  precio() {
    // implementan subclases
    throw new Error('debe implementarse en las subclases');
  }
}

module.exports = Libro;

const Libro = require('./Libro.js');

class LibroDigital extends Libro {
  precio() {
    return this._costo + this._costo * 0.02;
  }
}

module.exports = LibroDigital;

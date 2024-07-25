const Libro = require('./Libro.js');

class LibroImpreso extends Libro {
  precio() {
    return this._costo + this._costo * 0.01 + 400;
  }
}
module.exports = LibroImpreso;

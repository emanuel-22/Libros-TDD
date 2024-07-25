const LibroDigital = require('./LibroDigital');
const LibroImpreso = require('./LibroImpreso');
const Cliente = require('./Cliente');
const ClienteVIP = require('./ClienteVIP');


let gamma, mackenzie;
let normal;

jest.mock('./LibroDigital');

beforeEach( ()=> {
    normal = new Cliente('Juan');
    vip = new ClienteVIP('Clara');
    gamma = new LibroImpreso('OO Patterns', 'Gamma et al', 3000);
    mackenzie = new LibroDigital('Empirical Research in HCI','MacKenzie',5000);
});

describe("Un Cliente nuevo", ()=>{
    it("no debería tener libros", ()=>{
        nuevo = new Cliente("Julián");
        expect(nuevo.libros()).toEqual([]);
    })

    it("debería tener crédito 0",()=>{
        nuevo = new Cliente("Julián");
        expect(nuevo.credito()).toEqual(0);
    })
} )

describe("Un Cliente normal", ()=>{
    it("debe poder recargar crédito", () => {
        normal.recargarCredito(10000);
        expect(normal.credito()).toBe(10000);
    });

    it("no debe aumentar crédito si se carga 0", () => {
        normal.recargarCredito(0);
        expect(normal.credito()).toBe(0);
    });

    it("al comprar un libro debería descontar el crédito", ()=>{
        // mackenzie.precio.mockReturnValue(2000);
        mackenzie.precio.mockImplementation(()=>{return 4000-2000});
        normal.recargarCredito(10000);
        normal.comprarLibro(mackenzie);
        expect(normal.credito()).toBe(8000);
    })

    it("al comprar un libro debería tenerlo entre sus libros", ()=>{
        normal.recargarCredito(10000);
        normal.comprarLibro(gamma);
        expect(normal.libros()).toContain(gamma);
    })

    it("no puede gastar más del crédito que tiene", ()=>{
        normal.recargarCredito(1000);
        let compraInvalida = ()=>{normal.comprarLibro(gamma)};
        expect(compraInvalida).toThrow();
    })
} )

describe("Un Cliente VIP", ()=>{
    it("después de comprar 20 libros, debería tener bonificación del 7%", ()=>{
        mackenzie.precio.mockReturnValue(0);
        for (let i = 0; i<19; i++){
            vip.comprarLibro(mackenzie);
        }
        vip.recargarCredito(1000);
        expect(vip.credito()).toBe(1050); 
        vip.comprarLibro(mackenzie);
        vip.recargarCredito(1000);
        expect(vip.credito()).toBe(2120);
        vip.comprarLibro(mackenzie);
        vip.recargarCredito(1000);
        expect(vip.credito()).toBe(3190);
    } )

    it("debería obtener bonificación del 5% al cargar $50 o más (y habiendo comprado menos de 20 libros)", ()=>{
        vip.recargarCredito(49);
        expect(vip.credito()).toBe(49); 
        vip.recargarCredito(50);
        expect(vip.credito()).toBe(101.5);
        vip.recargarCredito(1000);
        expect(vip.credito()).toBe(1151.5);
    })
} )
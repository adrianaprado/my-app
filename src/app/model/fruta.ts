export class Fruta {
    private _id: number;
    private _nombre: string;
    private _precio: number;
    private _calorias: number;
    private _colores: string[];
    private _oferta: boolean;
    private _descuento: number;
    private _imagen: string;
    private _cant: number;

    constructor() {
        this._id = -1;
        this._nombre = '';
        this._precio = 0;
        this._calorias = 0;
        this._colores = [];
        this._oferta = false;
        this._descuento = 5;
        this._imagen = 'https://www.frutadelasarga.com/server/Portal_0008706/img/products/melocoton-de-cieza_1677407.jpg';
        this._cant = 1;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(value: number) {
        this._precio = value;
    }

    public get calorias(): number {
        return this._calorias;
    }

    public set calorias(value: number) {
        this._calorias = value;
    }

    public get colores(): string[] {
        return this._colores;
    }

    public set colores(value: string[]) {
        this._colores = value;
    }

    public get oferta(): boolean {
        return this._oferta;
    }

    public set oferta(value: boolean) {
        this._oferta = value;
    }

    public get descuento(): number {
        return this._descuento;
    }

    public set descuento(value: number) {
        this._descuento = value;
    }

    public get imagen(): string {
        return this._imagen;
    }

    public set imagen(value: string) {
        this._imagen = value;
    }

    public get cant(): number {
        return this._cant;
    }
    public set cant(value: number) {
        this._cant = value;
    }
}

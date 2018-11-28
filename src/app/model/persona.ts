import { Sexo } from './Sexo';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _sexo: Sexo;
    private _edad: number;
    private _email: string;

    constructor() {
        this._nombre = 'Anonimo';
        this._apellidos = '';
        this._sexo = Sexo.I;
        this._edad = 16;
        this._email = '';
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }

    public set apellidos(value: string) {
        this._apellidos = value;
    }

    public get sexo(): Sexo {
        return this._sexo;
    }

    public set sexo(value: Sexo) {
        this._sexo = value;
    }

    public get edad(): number {
        return this._edad;
    }

    public set edad(value: number) {
        this._edad = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }
}



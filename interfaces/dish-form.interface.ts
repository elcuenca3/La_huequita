export interface DishFormInteface {
    nombre: string,
    categoria: string[],
    historia: string,
    descripcion: string,
    ingredientes: string[],
    preparacion: string,
    lugar: string,
    huecas: string[],
    calorias: string,
    file: File | null
}
export interface catalogoFormInteface {
    nombre: string,
    file: File | null
}
export interface huecasFormInteface {
    nombre: string,
    file: File | null
}

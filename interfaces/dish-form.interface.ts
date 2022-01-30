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
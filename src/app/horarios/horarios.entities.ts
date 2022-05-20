export interface Horarios {
    id: number;
    user_id: number;
    materia_id: number;
    dia: string; // TODO: cambiar tipo de dato
    hora: string;
    profesor: string;
}